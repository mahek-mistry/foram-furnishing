import { GoogleGenAI, Modality } from "@google/genai";

export class GeminiLiveService {
  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    this.session = null;
    this.audioContext = null;
    this.workletNode = null;
    this.mediaStream = null;
    this.isConnected = false;
  }

  async connect(callbacks) {
    if (this.isConnected) return;

    try {
      this.session = await this.ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-09-2025",
        callbacks: {
          onopen: async () => {
            this.isConnected = true;
            try {
              await this.startAudioCapture();
            } catch (error) {
              this.isConnected = false;
              callbacks.onError?.(error);
              this.session?.close();
            }
          },
          onmessage: async (message) => {
            if (message.serverContent?.modelTurn?.parts) {
              for (const part of message.serverContent.modelTurn.parts) {
                if (part.text) {
                  callbacks.onMessage?.(part.text);
                }
                if (part.inlineData?.data) {
                  callbacks.onAudio?.(part.inlineData.data);
                }
              }
            }
            if (message.serverContent?.interrupted) {
              callbacks.onInterrupted?.();
            }
          },
          onclose: () => {
            this.isConnected = false;
            callbacks.onClose?.();
          },
          onerror: (error) => {
            callbacks.onError?.(error);
          },
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: "You are a helpful assistant in a metallic-themed messaging app. Keep responses concise and friendly.",
        },
      });
    } catch (error) {
      console.error("Failed to connect to Gemini Live:", error);
      throw error;
    }
  }

  async startAudioCapture() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error("Audio capture is not supported in this browser");
    }

    try {
      this.audioContext = new AudioContext({ sampleRate: 16000 });
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = this.audioContext.createMediaStreamSource(this.mediaStream);

      const processor = this.audioContext.createScriptProcessor(4096, 1, 1);
      source.connect(processor);
      processor.connect(this.audioContext.destination);

      processor.onaudioprocess = (e) => {
        if (!this.isConnected || !this.session) return;

        const inputData = e.inputBuffer.getChannelData(0);
        const pcmData = this.floatTo16BitPCM(inputData);
        const base64Data = btoa(String.fromCharCode(...new Uint8Array(pcmData.buffer)));

        this.session.sendRealtimeInput({
          media: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
        });
      };
    } catch (error) {
      console.error("Error capturing audio:", error);
      throw error;
    }
  }

  floatTo16BitPCM(input) {
    const output = new Int16Array(input.length);
    for (let i = 0; i < input.length; i++) {
      const s = Math.max(-1, Math.min(1, input[i]));
      output[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
    return output;
  }

  disconnect() {
    this.session?.close();
    this.mediaStream?.getTracks().forEach(track => track.stop());
    this.audioContext?.close();
    this.isConnected = false;
  }
}
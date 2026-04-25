import React, { useEffect, useState, useRef } from 'react';
import { Mic, X, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GeminiLiveService } from '../services/geminiLive';

export const LiveVoiceOverlay = ({ isOpen, onClose, onTranscription }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState('Ready to talk');
  const liveService = useRef(null);
  const audioQueue = useRef([]);
  const isPlaying = useRef(false);

  useEffect(() => {
    if (isOpen) {
      startSession();
    } else {
      stopSession();
    }
    return () => stopSession();
  }, [isOpen]);

  const startSession = async () => {
    setIsConnecting(true);
    setStatus('Connecting to Gemini...');
    
    liveService.current = new GeminiLiveService();
    
    try {
      await liveService.current.connect({
        onMessage: (text) => {
          onTranscription?.(text);
        },
        onAudio: (base64) => {
          audioQueue.current.push(base64);
          playNextInQueue();
        },
        onInterrupted: () => {
          audioQueue.current = [];
          // Stop current playback logic would go here
        },
        onError: (err) => {
          console.error(err);
          if (err.name === 'NotFoundError' || err.message?.includes('device not found')) {
            setStatus('Microphone not found. Please connect a mic.');
          } else if (err.name === 'NotAllowedError') {
            setStatus('Microphone access denied. Please allow permissions.');
          } else {
            setStatus('Connection error. Please try again.');
          }
          setIsConnecting(false);
        },
        onClose: () => {
          setStatus('Disconnected');
        }
      });
      setIsConnecting(false);
      setStatus('Listening...');
    } catch (err) {
      setIsConnecting(false);
      setStatus('Failed to connect');
    }
  };

  const stopSession = () => {
    liveService.current?.disconnect();
    liveService.current = null;
    audioQueue.current = [];
  };

  const playNextInQueue = async () => {
    if (isPlaying.current || audioQueue.current.length === 0) return;
    
    isPlaying.current = true;
    const base64 = audioQueue.current.shift();
    
    try {
      const audioData = Uint8Array.from(atob(base64), c => c.charCodeAt(0)).buffer;
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 24000 });
      
      // For raw PCM, we need to wrap it in a buffer
      const floatData = new Float32Array(audioData.byteLength / 2);
      const intData = new Int16Array(audioData);
      for (let i = 0; i < intData.length; i++) {
        floatData[i] = intData[i] / 32768.0;
      }
      
      const buffer = audioCtx.createBuffer(1, floatData.length, 24000);
      buffer.getChannelData(0).set(floatData);
      
      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(audioCtx.destination);
      
      source.onended = () => {
        isPlaying.current = false;
        playNextInQueue();
      };
      
      source.start();
    } catch (err) {
      console.error("Playback error:", err);
      isPlaying.current = false;
      playNextInQueue();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          className="w-full max-w-md metallic-surface p-8 flex flex-col items-center text-center"
        >
          <div className="w-full flex justify-end mb-4">
            <button onClick={onClose} className="p-2 rounded-full metallic-button">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full metallic-surface-pressed flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center"
              >
                <Mic className="w-12 h-12 text-emerald-600" />
              </motion.div>
            </div>
            
            {/* Pulsing rings */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-emerald-500/30"
            />
          </div>

          <h2 className="text-2xl font-bold mb-2">Gemini Live</h2>
          <p className="text-metal-dark mb-8">{status}</p>

          <div className="flex gap-6">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-4 rounded-full metallic-button"
            >
              {isMuted ? <VolumeX className="w-6 h-6 text-red-500" /> : <Volume2 className="w-6 h-6" />}
            </button>
            <button
              onClick={onClose}
              className="px-8 py-4 rounded-full metallic-button bg-red-500/10 text-red-600 font-bold"
            >
              End Call
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
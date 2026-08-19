import React, { useEffect, useRef, useState } from 'react';
import { Phone, PhoneOff, Video, VideoOff, Mic, MicOff, User, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CallOverlay = ({ isOpen, type, chat, onClose }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(type === 'voice');
  const [callDuration, setCallDuration] = useState(0);
  const localVideoRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    let interval;
    if (isOpen) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);

      if (type === 'video' || !isVideoOff) {
        startCamera();
      }
    } else {
      stopCamera();
      setCallDuration(0);
    }

    return () => {
      clearInterval(interval);
      stopCamera();
    };
  }, [isOpen, type, isVideoOff]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      setStream(mediaStream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0z-[100] bg-black flex flex-col items-center justify-center p-6"
      >
        {/* Background / Video Area */}
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
          {type === 'video' && !isVideoOff ? (
            <video
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
            />
          ) : (
            <div className="w-full h-full bg-metal-accent/20 flex flex-col items-center justify-center">
              <div className="w-48 h-48 rounded-full metallic-surface flex items-center justify-center mb-8 border-4 border-metal-dark/20">
                {chat?.avatar ? (
                  <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <User className="w-24 h-24 text-metal-dark" />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Call Info */}
        <div className="relative z-10 text-center mb-auto pt-12">
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{chat?.name || 'Unknown'}</h2>
          <p className="text-white/70 font-mono tracking-widest text-lg drop-shadow-md">
            {formatDuration(callDuration)}
          </p>
          <div className="mt-4 inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-widest">
            {type === 'video' ? 'Encrypted Video Call' : 'Encrypted Voice Call'}
          </div>
        </div>

        {/* Controls */}
        <div className="relative z-10 w-full max-w-lg mb-12">
          <div className="metallic-surface p-8 flex items-center justify-around rounded-[40px] shadow-2xl border border-white/10">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-5 rounded-full transition-all duration-300 ${
                isMuted ? 'bg-red-500/20 text-red-500 shadow-inner' : 'metallic-button text-metal-accent'
              }`}
            >
              {isMuted ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
            </button>

            <button
              onClick={onClose}
              className="p-8 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all duration-300 active:scale-90"
            >
              <PhoneOff className="w-10 h-10" />
            </button>

            {type === 'video' && (
              <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`p-5 rounded-full transition-all duration-300 ${
                  isVideoOff ? 'bg-red-500/20 text-red-500 shadow-inner' : 'metallic-button text-metal-accent'
                }`}
              >
                {isVideoOff ? <VideoOff className="w-8 h-8" /> : <Video className="w-8 h-8" />}
              </button>
            )}
          </div>
        </div>

        {/* Mini Local Preview (if video) */}
        {type === 'video' && !isVideoOff && (
          <div className="absolute bottom-32 right-8 w-40 h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 z-20">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover mirror"
            />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
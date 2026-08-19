import React, { useState, useRef, useEffect } from 'react';
import { Send, Phone, Video, MoreVertical, Paperclip, Smile, Mic, MessageSquarePlus, User } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'motion/react';
import { EmojiPicker } from './EmojiPicker';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const ChatArea = ({ chat, messages, onSendMessage, onVoiceClick, onCallClick }) => {
  const [inputText, setInputText] = useState('');
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
      setIsEmojiOpen(false);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setInputText(prev => prev + emoji);
  };

  if (!chat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#e0e0e0] text-metal-dark">
        <div className="w-24 h-24 rounded-full metallic-surface flex items-center justify-center mb-6">
          <MessageSquarePlus className="w-12 h-12" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Select a chat to start messaging</h2>
        <p className="text-sm opacity-60">Your messages are end-to-end encrypted.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-[#e0e0e0] relative">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-metal-dark/10 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full metallic-surface-pressed flex items-center justify-center overflow-hidden">
            {chat.avatar ? (
              <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
            ) : (
              <User className="w-6 h-6 text-metal-dark" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-sm">{chat.name}</h3>
            <p className="text-[10px] text-emerald-600 font-medium">{chat.isOnline ? 'Online' : 'Offline'}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => onCallClick?.('video')}
            className="p-2 rounded-full metallic-button"
          >
            <Video className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onCallClick?.('voice')}
            className="p-2 rounded-full metallic-button"
          >
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full metallic-button">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex w-full",
                msg.sender === 'user' ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[70%] p-3 rounded-2xl text-sm leading-relaxed",
                  msg.sender === 'user'
                    ? "metallic-surface-pressed text-metal-accent rounded-tr-none"
                    : "metallic-surface text-metal-accent rounded-tl-none"
                )}
              >
                <p>{msg.text}</p>
                <span className="text-[10px] opacity-50 mt-1 block text-right">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Emoji Picker */}
      <EmojiPicker isOpen={isEmojiOpen} onSelect={handleEmojiSelect} />

      {/* Input Area */}
      <div className="p-4 border-t border-metal-dark/10">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsEmojiOpen(!isEmojiOpen)}
            className={cn(
              "p-2 rounded-full transition-all duration-200",
              isEmojiOpen ? "metallic-surface-pressed text-emerald-600" : "metallic-button"
            )}
          >
            <Smile className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full metallic-button">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="w-full metallic-input pr-12"
            />
            <button
              onClick={handleSend}
              className="absolute right-2 top-1.5 p-1.5 rounded-full metallic-button text-metal-accent"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={onVoiceClick}
            className="p-3 rounded-full metallic-button text-metal-accent hover:text-emerald-600"
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
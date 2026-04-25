import React from 'react';
import { Search, MoreVertical, MessageSquarePlus, User } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Sidebar = ({ chats, activeChatId, onChatSelect }) => {
  return (
    <div className="w-80 h-full flex flex-col border-r border-metal-dark/20 p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="w-10 h-10 rounded-full metallic-surface flex items-center justify-center">
          <User className="w-6 h-6 text-metal-accent" />
        </div>
        <div className="flex gap-4">
          <button className="p-2 rounded-full metallic-button">
            <MessageSquarePlus className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full metallic-button">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full metallic-input pl-10"
        />
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-metal-dark" />
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onChatSelect(chat.id)}
            className={cn(
              "w-full p-3 flex items-center gap-3 transition-all duration-200 text-left",
              activeChatId === chat.id ? "metallic-surface-pressed" : "metallic-surface hover:scale-[1.02]"
            )}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full metallic-surface-pressed flex items-center justify-center overflow-hidden">
                {chat.avatar ? (
                  <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-6 h-6 text-metal-dark" />
                )}
              </div>
              {chat.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#e0e0e0]" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-sm truncate">{chat.name}</h3>
                <span className="text-[10px] text-metal-dark">12:45</span>
              </div>
              <p className="text-xs text-metal-dark truncate">{chat.lastMessage || 'No messages yet'}</p>
            </div>
            {chat.unreadCount && chat.unreadCount > 0 && (
              <div className="w-5 h-5 rounded-full bg-metal-accent text-white text-[10px] flex items-center justify-center font-bold">
                {chat.unreadCount}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
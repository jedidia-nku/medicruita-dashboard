// pages/chat/Chatollama.tsx
import React, { useState } from 'react';
import HelpInput from '../../components/ChatIlama/HelpInput';
import axios from 'axios';

interface Message {
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

const Chatollama: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = async (userMessage: string) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: userMessage, timestamp }]);

    try {
      const res = await axios.post("https://wallmap.onrender.com/api/chat/medical", {
        userQuestion: userMessage,
      });

      const reply = res.data.reply;

      // Add AI reply
      setMessages(prev => [...prev, { sender: 'ai', text: reply, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex-1 flex flex-col bg-gray-100 h-[calc(100vh-5rem)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-4 max-w-2xl ${msg.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}
          >
            {msg.sender === 'ai' && (
              <img
                src="/llama-icon.png"
                alt="AI"
                className="w-10 h-10 rounded-xl"
              />
            )}
            <div className="flex-1">
              <div className={`flex items-center ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-2 mb-1`}>
                <span className="font-semibold">{msg.sender === 'user' ? 'You' : 'Llama AI'}</span>
                <span className="text-xs text-gray-400">{msg.timestamp}</span>
              </div>
              <div className={`${msg.sender === 'user' ? 'bg-primary bg-opacity-20' : 'bg-white'} rounded-xl p-4`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
            {msg.sender === 'user' && (
              <img
                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp"
                alt="You"
                className="w-10 h-10 rounded-xl"
              />
            )}
          </div>
        ))}
      </div>

      <HelpInput onSendMessage={handleSendMessage} />
    </main>
  );
};

export default Chatollama;

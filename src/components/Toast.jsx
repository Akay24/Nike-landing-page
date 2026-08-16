import React from 'react';

const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gray-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-gray-700 animate-bounce-short transition-all">
      <div className="w-7 h-7 rounded-full bg-coral-red flex items-center justify-center text-white font-bold text-sm">
        ✓
      </div>
      <span className="font-montserrat text-sm font-medium pr-2">{message}</span>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white font-bold text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;

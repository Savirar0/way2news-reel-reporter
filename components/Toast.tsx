import React, { useEffect } from 'react';
import { CheckCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: 'success' | 'info';
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose, type = 'info' }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-brand-dark text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 min-w-[300px] justify-center">
        {type === 'success' ? (
          <CheckCircle className="text-brand-yellow" size={20} />
        ) : (
          <Info className="text-brand-yellow" size={20} />
        )}
        <span className="font-medium text-sm">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
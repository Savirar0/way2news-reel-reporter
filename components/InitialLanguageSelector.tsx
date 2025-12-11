import React from 'react';
import { Check } from 'lucide-react';
import { Language } from '../types';

interface Props {
  onSelect: (lang: Language) => void;
}

const languages: { code: Language; label: string; nativeName: string; sub: string }[] = [
  { code: 'en', label: 'English', nativeName: 'English', sub: 'Continue in English' },
  { code: 'te', label: 'Telugu', nativeName: 'తెలుగు', sub: 'తెలుగులో కొనసాగండి' },
  { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்', sub: 'தமிழில் தொடரவும்' },
];

const InitialLanguageSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-4 animate-in fade-in duration-500">
      <div className="max-w-md w-full space-y-8 text-center">
        
        {/* Brand Logo Animation */}
        <div className="flex flex-col items-center gap-4 mb-8">
           <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-lg shadow-brand-yellow/20 animate-bounce">
              <span className="text-brand-dark font-black text-3xl">W</span>
           </div>
           <h1 className="text-2xl font-bold text-brand-dark tracking-tight">Way2News Reel Reporter</h1>
        </div>

        <div className="space-y-2 mb-8">
          <h2 className="text-xl font-bold text-brand-dark">Select your language</h2>
          <p className="text-brand-grey text-sm">Please choose your preferred language to continue</p>
        </div>

        <div className="grid gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelect(lang.code)}
              className="group relative flex items-center p-4 bg-brand-light border-2 border-brand-border hover:border-brand-yellow rounded-2xl transition-all duration-300 hover:shadow-md active:scale-95 text-left"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 group-hover:border-brand-yellow/30 transition-colors">
                <span className="font-bold text-lg text-brand-dark">{lang.nativeName.charAt(0)}</span>
              </div>
              <div className="ml-4 flex-1">
                <div className="font-bold text-brand-dark text-lg group-hover:text-brand-yellow transition-colors">{lang.nativeName}</div>
                <div className="text-xs text-brand-grey uppercase tracking-wider">{lang.label}</div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Check className="text-brand-yellow" size={24} />
              </div>
            </button>
          ))}
        </div>

        <p className="text-xs text-brand-grey/50 mt-8">
            You can change this later from the menu.
        </p>
      </div>
    </div>
  );
};

export default InitialLanguageSelector;
import React, { useState } from 'react';
import { Menu, X, Globe, AlertCircle, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';
import { Language, Content } from '../types';
import { translations } from '../constants';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  
  // State for confirmation dialog
  const [pendingLang, setPendingLang] = useState<Language | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegisterClick = () => {
    setIsOpen(false);
    window.open('https://www.way2studios.com/register', '_blank');
  };

  const languages: { code: Language; label: string; nativeName: string }[] = [
    { code: 'en', label: 'English', nativeName: 'English' },
    { code: 'te', label: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்' },
  ];

  const handleLanguageSelect = (targetLang: Language) => {
    if (targetLang === lang) {
      setShowLanguageModal(false);
      return;
    }
    setPendingLang(targetLang);
  };

  const confirmSwitch = () => {
    if (pendingLang) {
      setLang(pendingLang);
      setPendingLang(null);
      setShowLanguageModal(false);
    }
  };

  const cancelSwitch = () => {
    setPendingLang(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-card transition-all duration-300 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="assets/waytonewslogo.png" alt="Way2News Logo" className="h-8 w-auto" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Language Toggle Button - Moved to first position */}
              <button 
                onClick={() => setShowLanguageModal(true)}
                className="flex items-center gap-2 bg-brand-light border border-brand-border px-4 py-2.5 rounded-xl text-brand-dark font-medium hover:bg-gray-100 transition shadow-sm active:scale-95"
              >
                <Globe size={18} className="text-brand-dark" />
                <span className="uppercase text-sm">{languages.find(l => l.code === lang)?.label}</span>
              </button>

              <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-brand-grey hover:text-brand-dark hover:underline decoration-brand-yellow decoration-2 underline-offset-4 font-medium transition-all text-sm uppercase tracking-wide">{content.nav.howItWorks}</a>
              <a href="#earnings" onClick={(e) => handleNavClick(e, 'earnings')} className="text-brand-grey hover:text-brand-dark hover:underline decoration-brand-yellow decoration-2 underline-offset-4 font-medium transition-all text-sm uppercase tracking-wide">{content.nav.earnings}</a>
              
              {/* Desktop CTA Button */}
              <button 
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-brand-yellow to-yellow-500 hover:from-yellow-400 hover:to-brand-yellow text-brand-dark font-bold py-2.5 px-6 rounded-xl shadow-lg shadow-brand-yellow/20 transition-all transform hover:-translate-y-0.5 active:scale-95 text-sm whitespace-nowrap flex items-center gap-2"
              >
                {content.form.submit}
                <ExternalLink size={16} />
              </button>
            </nav>

            {/* Mobile Interactions */}
            <div className="flex items-center gap-3 md:hidden">
               {/* Mobile Language Button */}
              <button 
                  onClick={() => setShowLanguageModal(true)}
                  className="flex items-center gap-2 bg-brand-light border border-brand-border px-3 py-2 rounded-xl text-brand-dark font-semibold text-xs active:bg-gray-200 shadow-sm"
              >
                 <Globe size={16} className="text-brand-dark" />
                 <span className="uppercase">{languages.find(l => l.code === lang)?.label}</span>
              </button>

              <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark p-2 hover:bg-brand-light rounded-xl transition-colors">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-brand-border absolute w-full shadow-card z-50 animate-in slide-in-from-top-2">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="block px-3 py-3 rounded-xl text-base font-medium text-brand-grey hover:bg-brand-light hover:text-brand-dark">{content.nav.howItWorks}</a>
              <a href="#earnings" onClick={(e) => handleNavClick(e, 'earnings')} className="block px-3 py-3 rounded-xl text-base font-medium text-brand-grey hover:bg-brand-light hover:text-brand-dark">{content.nav.earnings}</a>
              <a href="#register" onClick={(e) => handleNavClick(e, 'register')} className="block px-3 py-3 rounded-xl text-base font-medium text-brand-grey hover:bg-brand-light hover:text-brand-dark">{content.nav.contact}</a>
              <div className="pt-4 mt-2 border-t border-brand-border px-3">
                <button onClick={handleRegisterClick} className="w-full bg-gradient-to-r from-brand-yellow to-yellow-500 hover:from-yellow-400 hover:to-brand-yellow text-brand-dark font-bold py-3.5 rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center">
                  {content.form.submit}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Language Selection & Confirmation Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full animate-in zoom-in-95 duration-200 border border-brand-border relative overflow-hidden">
            
            {/* Close Button */}
            <button onClick={() => { setShowLanguageModal(false); setPendingLang(null); }} className="absolute top-4 right-4 text-brand-grey hover:text-brand-dark p-1 rounded-full hover:bg-brand-light">
              <X size={20} />
            </button>

            {!pendingLang ? (
              /* View 1: Select Language (Radio Style) */
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold text-brand-dark text-center mb-2">{content.languageModal.selectLanguage}</h3>
                
                <div className="flex flex-col gap-3">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLanguageSelect(l.code)}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${lang === l.code ? 'border-brand-yellow bg-brand-yellow/5' : 'border-brand-light hover:border-brand-border bg-white'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${lang === l.code ? 'border-brand-yellow' : 'border-gray-300'}`}>
                           {lang === l.code && <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></div>}
                        </div>
                        <div className="flex flex-col items-start">
                          <span className={`font-bold text-base ${lang === l.code ? 'text-brand-dark' : 'text-brand-grey'}`}>{l.nativeName}</span>
                          <span className="text-xs text-brand-grey uppercase tracking-wider">{l.label}</span>
                        </div>
                      </div>
                      {lang === l.code && <CheckCircle2 size={20} className="text-brand-yellow" />}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* View 2: Confirmation */
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-2 animate-bounce">
                  <AlertCircle className="text-brand-dark" size={28} />
                </div>
                
                {/* Use content from the PENDING language to display the confirmation message */}
                <h3 className="text-xl font-bold text-brand-dark">{translations[pendingLang].languageModal.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">
                  {translations[pendingLang].languageModal.desc.replace('{lang}', languages.find(l => l.code === pendingLang)?.nativeName || '')}
                </p>
                
                <div className="flex gap-3 w-full pt-2">
                  <button 
                    onClick={cancelSwitch}
                    className="flex-1 py-3 px-4 rounded-xl border border-brand-border text-brand-dark font-semibold hover:bg-brand-light transition-colors"
                  >
                    {translations[pendingLang].languageModal.cancel}
                  </button>
                  <button 
                    onClick={confirmSwitch}
                    className="flex-1 py-3 px-4 rounded-xl bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {translations[pendingLang].languageModal.confirm}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

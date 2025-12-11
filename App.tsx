import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Earnings from './components/Earnings';
import WhoCanJoin from './components/WhoCanJoin';
import Categories from './components/Categories';
import Guidelines from './components/Guidelines';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Register from './components/Register';
import Footer from './components/Footer';
import Toast from './components/Toast';
import InitialLanguageSelector from './components/InitialLanguageSelector';
import ContentPolicyModal from './components/ContentPolicyModal';
import { translations } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '' });
  const [hasSelectedLang, setHasSelectedLang] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  useEffect(() => {
    // Check local storage for language preference
    const savedLang = localStorage.getItem('way2news_lang') as Language;
    if (savedLang && translations[savedLang]) {
      setLang(savedLang);
      setHasSelectedLang(true);
    } else {
      setHasSelectedLang(false);
    }

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setShowStickyCTA(true);
        } else {
            setShowStickyCTA(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSelect = (selectedLang: Language) => {
    setLang(selectedLang);
    setHasSelectedLang(true);
    localStorage.setItem('way2news_lang', selectedLang);
  };

  const handleRegisterRedirect = () => {
    window.open('https://www.way2studios.com/register', '_blank');
  };

  const handleFooterLinkClick = (e: React.MouseEvent, type?: string) => {
    e.preventDefault();
    if (type === 'policy') {
        setShowPolicyModal(true);
    } else {
        setToast({ isVisible: true, message: 'Coming Soon!' });
    }
  };

  // Wrapper to update state and storage when header changes language
  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('way2news_lang', newLang);
  };

  const content = translations[lang];

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark selection:bg-brand-yellow selection:text-black">
      {!hasSelectedLang && <InitialLanguageSelector onSelect={handleLanguageSelect} />}
      
      <Header lang={lang} setLang={changeLanguage} content={content} />
      
      <main>
        <Hero content={content} />
        <HowItWorks content={content} />
        <Earnings content={content} />
        <WhoCanJoin content={content} />
        <Categories content={content} />
        <Guidelines content={content} />
        <Testimonials content={content} />
        <FAQ content={content} />
        <Register content={content} />
      </main>

      <Footer content={content} onLinkClick={handleFooterLinkClick} />
      
      <Toast 
        message={toast.message} 
        isVisible={toast.isVisible} 
        onClose={() => setToast({ ...toast, isVisible: false })} 
      />

      {showPolicyModal && (
        <ContentPolicyModal content={content} onClose={() => setShowPolicyModal(false)} />
      )}

      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-brand-border shadow-[0_-5px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 md:hidden z-40 flex items-center justify-center ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <button onClick={handleRegisterRedirect} className="w-full bg-gradient-to-r from-brand-yellow to-yellow-500 hover:from-yellow-400 hover:to-brand-yellow text-brand-dark font-bold py-3.5 rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center">
            {content.form.submit}
        </button>
      </div>
    </div>
  );
}

export default App;
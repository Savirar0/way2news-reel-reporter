import React from 'react';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { Content } from '../types';

interface HeroProps {
  content: Content;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const handleGetStarted = () => {
    window.open('https://www.way2studios.com/register', '_blank');
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 text-center lg:text-left">
            
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 border border-brand-yellow/30 text-brand-dark font-bold text-xs uppercase tracking-wider shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
                </span>
                {content.hero.badge}
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.15] lg:leading-[1.1] tracking-tight">
                {content.hero.title}
              </h1>
              
              <p className="text-base sm:text-lg text-brand-grey font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
                {content.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start pt-2">
                <button 
                  onClick={handleGetStarted}
                  className="w-full sm:w-auto min-w-[160px] bg-gradient-to-r from-brand-yellow to-yellow-500 hover:from-yellow-400 hover:to-brand-yellow text-brand-dark font-bold py-3.5 sm:py-4 px-8 rounded-xl shadow-lg shadow-brand-yellow/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 active:scale-95 border-2 border-transparent"
                >
                  {content.hero.cta}
                  <ArrowRight size={20} />
                </button>
                <button 
                  onClick={scrollToHowItWorks}
                  className="w-full sm:w-auto min-w-[160px] bg-white text-brand-dark font-bold py-3.5 sm:py-4 px-8 rounded-xl border-2 border-brand-border hover:border-brand-dark transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95"
                >
                  <PlayCircle size={20} />
                  {content.hero.watchDemo}
                </button>
              </div>
            </div>

            {/* Visual Content - Responsive Mockup */}
            <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
                {/* Scaled down on mobile using w-64 h-[480px] vs desktop w-72 h-[550px] */}
                <div className="relative w-64 h-[480px] sm:w-72 sm:h-[550px] bg-gray-700 rounded-[2.5rem] border-[8px] border-gray-700 shadow-2xl overflow-hidden ring-4 ring-gray-100 transition-all duration-300">
                    {/* Mock Phone Screen */}
                    <div className="w-full h-full bg-white relative flex flex-col">
                        <div className="h-14 bg-white border-b border-gray-100 w-full flex items-center justify-between px-4">
                           <div className="w-6 h-6 rounded-full bg-gray-100"></div>
                           <div className="w-20 h-4 bg-gray-100 rounded-full"></div>
                           <div className="w-6 h-6 rounded-full bg-gray-100"></div>
                        </div>
                        <div className="flex-1 bg-gray-50 relative p-2">
                            <div className="w-full h-full rounded-2xl bg-gray-200 overflow-hidden relative group">
                                <img src="https://picsum.photos/400/600" alt="News Reel" className="w-full h-full object-cover opacity-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                                     <div className="w-3/4 h-3 bg-white/80 rounded-full mb-2"></div>
                                     <div className="w-1/2 h-3 bg-white/60 rounded-full"></div>
                                </div>
                                <div className="absolute center inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="h-14 bg-white border-t border-gray-100 w-full flex items-center justify-around px-4">
                           <div className="w-8 h-8 rounded-full bg-brand-yellow/20"></div>
                           <div className="w-8 h-8 rounded-full bg-gray-50"></div>
                           <div className="w-8 h-8 rounded-full bg-gray-50"></div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Clean Badge */}
                <div className="absolute top-16 -left-2 sm:top-24 sm:-left-4 lg:left-0 bg-white p-3 sm:p-4 rounded-2xl shadow-card border border-brand-border animate-bounce duration-[3000ms] max-w-[160px] sm:max-w-none">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-brand-yellow to-yellow-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                            <span className="text-brand-dark font-bold text-lg">₹</span>
                        </div>
                        <div>
                            <div className="text-[10px] sm:text-xs text-brand-grey font-medium uppercase">{content.hero.dailyEarningsLabel}</div>
                            <div className="text-sm font-bold text-brand-dark">{content.hero.dailyEarnings}</div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { User, Briefcase, GraduationCap, Heart, Stethoscope } from 'lucide-react';
import { Content } from '../types';

const icons = [Heart, GraduationCap, Briefcase, Stethoscope, User];

const WhoCanJoin: React.FC<{ content: Content }> = ({ content }) => {
  return (
    <section 
      className="py-12 md:py-20 bg-brand-light border-y border-brand-border"
      style={{ backgroundImage: `url('/assets/uemp.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 md:mb-12">{content.sections.whoCanJoin}</h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {content.personas.map((p, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="flex flex-col items-center gap-4 group cursor-default">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-transform group-hover:-translate-y-2 shadow-sm border border-brand-border group-hover:border-brand-yellow">
                  <Icon 
                    size={32} 
                    strokeWidth={1.5}
                    className="md:w-9 md:h-9 text-brand-dark fill-brand-yellow/30 group-hover:fill-brand-yellow group-hover:text-brand-dark transition-all duration-300" 
                  />
                </div>
                <span className="font-semibold text-white text-sm tracking-wide text-center">{p.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;
import React from 'react';
import { Video, ClipboardCheck, UserCheck, BarChart3 } from 'lucide-react';
import { Content } from '../types';

interface Props {
  content: Content;
}

const icons = [Video, ClipboardCheck, UserCheck, BarChart3];

const HowItWorks: React.FC<Props> = ({ content }) => {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-brand-light border-y border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{content.sections.howItWorks}</h2>
          <div className="w-16 h-1.5 bg-brand-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {content.steps.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-black hover:shadow-card-hover hover:border-brand-yellow/50 transition-all duration-300 group relative z-10 h-full flex flex-col">
                <div className={`w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-yellow transition-all duration-300 shadow-sm relative z-10 border border-brand-border group-hover:border-brand-yellow`}>
                  {/* Added fill and stroke adjustments for 'real' look */}
                  <Icon size={28} strokeWidth={1.5} className="text-brand-dark group-hover:text-brand-dark transition-colors fill-brand-yellow/20 group-hover:fill-brand-light/20" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3 relative z-10 leading-tight">{`${idx + 1}. ${step.title}`}</h3>
                <p className="text-brand-grey text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

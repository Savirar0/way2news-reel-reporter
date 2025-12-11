import React from 'react';
import { Content } from '../types';
import { Quote } from 'lucide-react';

const Testimonials: React.FC<{ content: Content }> = ({ content }) => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-10 md:mb-12">{content.sections.testimonials}</h2>
        
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 no-scrollbar snap-x snap-mandatory">
          {content.testimonialsList.map((item) => (
            <div key={item.id} className="min-w-[85%] md:min-w-0 snap-center">
              <div className="bg-brand-light rounded-2xl p-8 h-full flex flex-col border border-brand-border hover:border-brand-yellow transition-colors duration-300">
                <div className="mb-4">
                    <Quote className="text-brand-yellow fill-current" size={32} />
                </div>
                <p className="text-brand-dark font-medium text-lg mb-6 flex-grow leading-relaxed">"{item.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-brand-yellow/20" />
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm">{item.name}</h4>
                    <p className="text-xs text-brand-grey uppercase tracking-wide">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
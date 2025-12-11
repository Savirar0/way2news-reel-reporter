import React, { useState } from 'react';
import { Content } from '../types';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC<{ content: Content }> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-20 bg-brand-light border-y border-brand-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10 md:mb-12">
            <div className="bg-brand-yellow/20 p-3 rounded-full mb-4 text-brand-dark">
                <HelpCircle size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark text-center">{content.sections.faq}</h2>
        </div>
        
        <div className="space-y-4">
          {content.faqList.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-card border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors gap-4"
              >
                <span className="font-bold text-brand-dark text-sm md:text-base leading-snug">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-brand-yellow flex-shrink-0" size={20} /> : <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />}
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="text-brand-grey leading-relaxed text-sm border-t border-gray-100 pt-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
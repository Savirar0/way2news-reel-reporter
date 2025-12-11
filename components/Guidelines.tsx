import React from 'react';
import { Check, X, ShieldAlert, FileCheck, AlertTriangle } from 'lucide-react';
import { Content } from '../types';

const Guidelines: React.FC<{ content: Content }> = ({ content }) => {
  return (
    <section className="py-12 md:py-20 bg-brand-light border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-10 md:mb-12">{content.sections.guidelines}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-yellow/30 transition-all duration-300 h-full">
            <h3 className="text-lg font-bold text-brand-dark mb-6 flex items-center gap-3 uppercase tracking-wide border-b border-gray-100 pb-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <FileCheck size={18} className="text-green-700 fill-green-200" />
              </div>
              {content.guidelinesList.acceptedTitle}
            </h3>
            <ul className="space-y-4">
              {content.guidelinesList.accepted.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-dark font-medium text-sm md:text-base">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-green-600" size={12} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-yellow/30 transition-all duration-300 h-full">
            <h3 className="text-lg font-bold text-brand-dark mb-6 flex items-center gap-3 uppercase tracking-wide border-b border-gray-100 pb-4">
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 flex-shrink-0">
                <ShieldAlert size={18} className="text-gray-700 fill-gray-200" />
              </div>
              {content.guidelinesList.rejectedTitle}
            </h3>
            <ul className="space-y-4">
               {content.guidelinesList.rejected.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-grey font-medium text-sm md:text-base">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-300">
                    <X className="text-gray-600" size={12} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Penalty Warning Banner */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3 max-w-2xl mx-auto">
            <AlertTriangle className="text-brand-yellow flex-shrink-0 mt-0.5 fill-brand-yellow/20" size={20} />
            <p className="text-sm text-brand-dark font-medium leading-relaxed">
                {content.guidelinesList.penaltyWarning}
            </p>
        </div>

      </div>
    </section>
  );
};

export default Guidelines;
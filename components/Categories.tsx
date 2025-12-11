import React from 'react';
import { TrendingUp, Stethoscope, Zap, BookOpen, Film, Tractor } from 'lucide-react';
import { Content } from '../types';

const icons = [TrendingUp, Stethoscope, Zap, BookOpen, Film, Tractor];

const Categories: React.FC<{ content: Content }> = ({ content }) => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-10 md:mb-12">{content.sections.categories}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {content.categoriesList.map((cat, idx) => {
            const Icon = icons[idx];
             return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm hover:shadow-card-hover hover:border-brand-yellow transition-all flex flex-col items-center gap-4 cursor-pointer group duration-300">
                <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-yellow transition-all duration-300 shadow-sm">
                  {/* Mix of filled and stroked icons for best visual */}
                  <Icon 
                    className="text-white group-hover:text-brand-dark transition-colors fill-white/10 group-hover:fill-brand-dark/10" 
                    size={24} 
                    strokeWidth={2}
                  />
                </div>
                <span className="font-medium text-brand-dark text-sm text-center">{cat.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
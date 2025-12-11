import React from 'react';
import { Content } from '../types';
import { ExternalLink } from 'lucide-react';

interface Props {
  content: Content;
}

const Register: React.FC<Props> = ({ content }) => {
  const handleRegisterRedirect = () => {
    window.open('https://www.way2studios.com/register', '_blank');
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-brand-light border-t border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white text-brand-dark rounded-3xl p-6 md:p-16 shadow-2xl relative overflow-hidden border border-black text-center">
           {/* Decorative */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <div className="mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-brand-dark leading-tight">{content.form.title}</h2>
                <p className="text-brand-grey text-base md:text-lg">{content.form.subtitle}</p>
            </div>

            <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-black shadow-inner mx-auto text-center">
                <p className="text-center text-brand-dark font-medium mb-6 leading-relaxed">
                    {content.form.portalDesc}
                </p>
                <div className="flex justify-center w-full mx-auto">
                  <button 
                      onClick={handleRegisterRedirect}
                      className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-3 px-8 bg-gradient-to-r from-brand-yellow to-yellow-500 hover:from-yellow-400 hover:to-brand-yellow text-brand-dark font-bold py-4 rounded-xl shadow-lg shadow-brand-yellow/30 transform hover:-translate-y-1 transition-all text-lg active:scale-95"
                  >
                      {content.form.submit}
                      <ExternalLink size={20} />
                  </button>
                </div>
            </div>
            
            <p className="text-xs text-brand-grey uppercase tracking-wider font-medium flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {content.form.portalLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
import React from 'react';
import { X, ShieldAlert, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Content } from '../types';

interface Props {
  content: Content;
  onClose: () => void;
}

const ContentPolicyModal: React.FC<Props> = ({ content, onClose }) => {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200 relative flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-brand-yellow/10 rounded-full flex items-center justify-center">
                <FileText className="text-brand-dark" size={20} />
             </div>
             <h2 className="text-xl font-bold text-brand-dark">{content.policy.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-brand-grey hover:text-brand-dark"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
            
            {/* Standards */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg text-brand-dark flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    {content.policy.standardsTitle}
                </h3>
                <ul className="space-y-2 pl-2">
                    {content.policy.standards.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-brand-grey leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Prohibited */}
            <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                    <ShieldAlert className="text-gray-700" size={20} />
                    {content.policy.prohibitedTitle}
                </h3>
                <ul className="space-y-2 pl-2">
                    {content.policy.prohibited.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-700 leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Penalties */}
            <div className="space-y-3">
                <h3 className="font-bold text-lg text-brand-dark flex items-center gap-2">
                    <AlertTriangle className="text-brand-yellow" size={20} />
                    {content.policy.penaltiesTitle}
                </h3>
                <p className="text-sm md:text-base text-brand-grey leading-relaxed border-l-4 border-brand-yellow pl-4 bg-yellow-50/50 py-2 rounded-r-lg">
                    {content.policy.penaltiesDesc}
                </p>
            </div>

            {/* Approval */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
                <h3 className="font-bold text-lg text-brand-dark">{content.policy.approvalTitle}</h3>
                <p className="text-sm md:text-base text-brand-grey leading-relaxed">
                    {content.policy.approvalDesc}
                </p>
            </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4 md:p-6 flex justify-end">
            <button 
                onClick={onClose}
                className="px-8 py-3 bg-brand-dark text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg active:scale-95"
            >
                {content.policy.close}
            </button>
        </div>

      </div>
    </div>
  );
};

export default ContentPolicyModal;
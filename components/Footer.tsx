import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Content } from '../types';

interface FooterProps {
  content: Content;
  onLinkClick: (e: React.MouseEvent, type?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ content, onLinkClick }) => {
  return (
    <footer className="bg-brand-light text-brand-dark py-8 md:py-12 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <img src="/assets/waytonewslogo.png" alt="Way2News Logo" className="h-10 w-auto" />
            </div>
            <p className="text-brand-grey max-w-sm text-sm leading-relaxed">{content.footer.desc}</p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-dark">{content.footer.quickLinks}</h4>
            <ul className="space-y-2 text-brand-grey text-sm">
              <li><a href="#!" onClick={(e) => onLinkClick(e)} className="hover:text-brand-yellow transition-colors">{content.footer.links.about}</a></li>
              <li><a href="#!" onClick={(e) => onLinkClick(e)} className="hover:text-brand-yellow transition-colors">{content.footer.links.terms}</a></li>
              <li><a href="#!" onClick={(e) => onLinkClick(e, 'policy')} className="hover:text-brand-yellow transition-colors">{content.footer.links.policy}</a></li>
              <li><a href="#!" onClick={(e) => onLinkClick(e)} className="hover:text-brand-yellow transition-colors">{content.footer.links.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-dark">{content.footer.followUs}</h4>
            <div className="flex gap-4">
              <a href="#!" onClick={(e) => onLinkClick(e)} className="w-10 h-10 bg-white border border-black rounded-xl flex items-center justify-center hover:bg-brand-dark hover:border-brand-dark hover:text-brand-yellow transition-all text-brand-grey">
                <Facebook size={18} className="fill-current" />
              </a>
              <a href="#!" onClick={(e) => onLinkClick(e)} className="w-10 h-10 bg-white border border-black rounded-xl flex items-center justify-center hover:bg-brand-dark hover:border-brand-dark hover:text-brand-yellow transition-all text-brand-grey">
                <Twitter size={18} className="fill-current" />
              </a>
              <a href="#!" onClick={(e) => onLinkClick(e)} className="w-10 h-10 bg-white border border-black rounded-xl flex items-center justify-center hover:bg-brand-dark hover:border-brand-dark hover:text-brand-yellow transition-all text-brand-grey">
                <Instagram size={18} />
              </a>
               <a href="#!" onClick={(e) => onLinkClick(e)} className="w-10 h-10 bg-white border border-black rounded-xl flex items-center justify-center hover:bg-brand-dark hover:border-brand-dark hover:text-brand-yellow transition-all text-brand-grey">
                <Youtube size={18} className="fill-current" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black pt-8 text-center text-brand-grey/80 text-sm">
          {content.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
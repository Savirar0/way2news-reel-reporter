import React from 'react';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import { Content } from '../types';

interface Props {
  content: Content;
}

const Earnings: React.FC<Props> = ({ content }) => {
  return (
    <section id="earnings" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{content.sections.earnings}</h2>
          <p className="text-brand-grey max-w-2xl mx-auto text-sm md:text-base">{content.earnings.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column: Payment Model */}
          <div className="lg:col-span-5 bg-brand-light rounded-2xl p-8 border border-black h-full">
            <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                <div className="p-2 bg-brand-yellow/10 rounded-lg">
                    <TrendingUp className="text-brand-yellow fill-brand-yellow/20" size={24} />
                </div>
                {content.earnings.modelTitle}
            </h3>
            <ul className="space-y-4">
                {content.earnings.modelItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-black shadow-sm">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 fill-green-100" size={22} />
                        <span className="font-medium text-brand-dark text-sm md:text-base">{item}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-8 p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-xl">
                <p className="text-brand-dark font-medium text-sm text-center">
                    Weekly payouts for approved reels. <br/> Bonuses paid monthly.
                </p>
            </div>
            <div className="mt-4">
              <img src="assets/upi.jpg" alt="UPI Payments" className="w-full h-auto" />
            </div>
          </div>

          {/* Right Column: Earnings Tiers Table */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-black shadow-card overflow-hidden">
                <div className="bg-brand-dark p-4 md:p-6 text-center">
                    <h3 className="text-white font-bold text-lg md:text-xl">{content.earnings.tiersTitle}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                    {/* Header Row (Desktop only) */}
                    <div className="hidden md:grid grid-cols-3 bg-gray-50 p-4 font-bold text-brand-grey text-xs uppercase tracking-wider">
                        <div>Subscribers</div>
                        <div className="text-center">Rate / Reel</div>
                        <div className="text-right">Sub Bonus</div>
                    </div>

                    {/* Rows */}
                    {content.earnings.tiers.map((tier, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 hover:bg-yellow-50/50 transition-colors gap-2 md:gap-0 items-center">
                            <div className="font-bold text-brand-dark text-sm md:text-base flex justify-between md:block">
                                <span className="md:hidden text-brand-grey text-xs uppercase font-medium">Subs:</span>
                                {tier.range}
                            </div>
                            <div className="font-medium text-brand-dark text-sm md:text-base text-right md:text-center flex justify-between md:block">
                                <span className="md:hidden text-brand-grey text-xs uppercase font-medium">Earn:</span>
                                <span className="bg-brand-yellow/20 px-2 py-1 rounded text-brand-dark">{tier.rate}</span>
                            </div>
                            <div className="font-semibold text-green-600 text-sm md:text-base text-right flex justify-between md:block">
                                <span className="md:hidden text-brand-grey text-xs uppercase font-medium">Bonus:</span>
                                {tier.subBonus}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-center text-xs text-brand-grey mt-4">
                * Earnings estimates based on consistent high-quality uploads and view targets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earnings;

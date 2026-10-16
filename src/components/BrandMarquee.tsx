import React, { useState } from 'react';
import { ALL_BRANDS, BrandInfo } from '../data/appliances';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';

interface BrandMarqueeProps {
  onSelectBrandForQuote: (brandName: string, categoryName?: string) => void;
}

export const BrandMarquee: React.FC<BrandMarqueeProps> = ({ onSelectBrandForQuote }) => {
  const [filter, setFilter] = useState<string>('all');

  const filterOptions = [
    { label: 'All 17 Brands', value: 'all' },
    { label: 'LED TV Brands', value: 'LED TVs' },
    { label: 'Air Conditioning Giants', value: 'Air Conditioners' },
    { label: 'Refrigerators', value: 'Refrigerators' },
    { label: 'Washing Machines', value: 'Washing Machines' },
    { label: 'Dishwashers', value: 'Dishwashers' },
  ];

  const displayedBrands = filter === 'all'
    ? ALL_BRANDS
    : ALL_BRANDS.filter((b) => b.category.includes(filter));

  return (
    <section id="brands" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-extrabold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Official Authorized Distribution Partner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Authorized Brands Matrix
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            We partner directly with the world's most trusted home appliance manufacturers. Every purchase at Sri Lakshmi Chowdhary Enterprises includes official manufacturer guarantees, genuine parts, and certified technician installation.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === opt.value
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayedBrands.map((brand) => (
            <div
              key={brand.name}
              className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Brand Name / Logo Representation */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors uppercase font-mono">
                    {brand.logoText}
                  </span>
                  {brand.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-800">
                      {brand.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                  {brand.tagline}
                </p>
              </div>

              <div>
                {/* Brand Categories List */}
                <div className="flex flex-wrap gap-1 mb-3 pt-2 border-t border-slate-200/60">
                  {brand.category.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Instant Quote Trigger */}
                <button
                  onClick={() => onSelectBrandForQuote(brand.name, brand.category[0])}
                  className="w-full py-1.5 px-2 rounded-lg bg-white group-hover:bg-blue-700 text-slate-800 group-hover:text-white border border-slate-200 group-hover:border-blue-700 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-amber-500 group-hover:text-amber-300" />
                  <span>Get {brand.name} Price</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Ticker Highlight */}
        <div className="mt-14 py-4 px-6 rounded-2xl bg-slate-900 text-white overflow-hidden flex items-center">
          <div className="shrink-0 flex items-center gap-2 pr-4 border-r border-slate-700 font-bold text-xs uppercase text-amber-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Authorized Partner Portfolio:</span>
          </div>
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pl-4 text-xs font-extrabold tracking-wider text-slate-300 whitespace-nowrap">
            {ALL_BRANDS.map((b) => (
              <span key={b.name} className="hover:text-amber-400 transition-colors">
                • {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

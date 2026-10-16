import React, { useState } from 'react';
import {
  Tv,
  Wind,
  Refrigerator,
  Shirt,
  Utensils,
  CheckCircle2,
  Phone,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Shield,
  MessageCircle
} from 'lucide-react';
import { APPLIANCE_CATEGORIES, ApplianceCategory, BUSINESS_NAP } from '../data/appliances';
import { buildWhatsAppInquiryUrl } from '../utils/appliance-calc';

interface ApplianceShowroomProps {
  onOpenQuoteModal: (category?: string, brand?: string) => void;
}

export const ApplianceShowroom: React.FC<ApplianceShowroomProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('all');

  const filteredCategories = activeTab === 'all'
    ? APPLIANCE_CATEGORIES
    : APPLIANCE_CATEGORIES.filter((c) => c.id === activeTab);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv': return <Tv className="w-6 h-6 text-blue-600" />;
      case 'Wind': return <Wind className="w-6 h-6 text-sky-600" />;
      case 'Refrigerator': return <Refrigerator className="w-6 h-6 text-cyan-600" />;
      case 'Shirt': return <Shirt className="w-6 h-6 text-indigo-600" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-emerald-600" />;
      default: return <Tv className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="appliances" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full">
            Authorized Large Appliance Showroom
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Explore Premium Home Appliances in Hyderabad
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Every product is sourced directly through official manufacturer distribution channels with verified GST billing, comprehensive warranties, and professional installation across Hyderabad.
          </p>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-800 text-white shadow-md shadow-blue-800/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All 5 Categories
            </button>
            {APPLIANCE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-blue-800 text-white shadow-md shadow-blue-800/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category, idx) => {
            const isLastOdd = filteredCategories.length % 2 === 1 && idx === filteredCategories.length - 1;
            return (
              <div
                key={category.id}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group ${
                  isLastOdd ? 'lg:col-span-2' : ''
                }`}
              >
              {/* Card Banner with Image & Meta */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={category.image}
                  alt={`${category.name} in Hyderabad - Sri Lakshmi Chowdhary Enterprises`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md">
                    {getCategoryIcon(category.icon)}
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      {category.name}
                    </span>
                  </div>
                  <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-md">
                    Starting {category.startingPrice}
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                    {category.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                {/* Authorized Brands List */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
                      Authorized Brands Offered:
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      100% Genuine Partner
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.popularBrands.map((brand) => (
                      <span
                        key={brand}
                        className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 border border-slate-200 transition-colors"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Smart Features Bullets */}
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-500 mb-2.5">
                    Key Performance & Smart Features:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {category.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Available Sizes / Capacities */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-semibold block mb-2">
                    Standard Sizes & Capacities Available:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {category.typicalSizes.map((sz) => (
                      <span
                        key={sz}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-100"
                      >
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popular Models Snapshot */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                  <span className="text-[11px] uppercase font-bold text-slate-500 block mb-1">
                    Featured Models in Showroom:
                  </span>
                  <div className="space-y-1.5">
                    {category.popularModels.slice(0, 3).map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800">
                          {m.brand} - {m.name}
                        </span>
                        <span className="text-[11px] text-blue-700 font-semibold">
                          {m.warranty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onOpenQuoteModal(category.name)}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer active:scale-95"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Get Hyderabad Quote</span>
                  </button>

                  <a
                    href={buildWhatsAppInquiryUrl({
                      phone: BUSINESS_NAP.phoneRaw,
                      category: category.name,
                      locality: 'Hyderabad'
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Bottom Local Banner CTA */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold">
              Commercial & Builder Inquiries Welcome
            </span>
            <h3 className="text-2xl font-black">
              Planning Multi-Appliance Packages For New Homes or Villas?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Get customized wholesale bundle pricing for luxury villas, apartments, and guest houses along Airport Road, Shamshabad, and Gachibowli with dedicated delivery scheduling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal('Multi-Appliance Package')}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Request Package Quote
            </button>
            <a
              href={`tel:${BUSINESS_NAP.phoneTel}`}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call 9505066661</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

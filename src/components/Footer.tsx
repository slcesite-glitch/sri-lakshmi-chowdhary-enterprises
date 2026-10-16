import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_NAP, ALL_BRANDS, APPLIANCE_CATEGORIES } from '../data/appliances';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-900 text-amber-300 font-black flex items-center justify-center text-lg shadow-md">
                SLC
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white block uppercase leading-tight">
                  {BUSINESS_NAP.name}
                </span>
                <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                  Authorized Large Home Appliances • Hyderabad
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Serving Hyderabad, Shamshabad, and the Rajiv Gandhi International Airport corridor with authorized distribution of premium LED TVs, Air Conditioners, Refrigerators, Washing Machines, and Dishwashers. Authorized manufacturer warranties, direct showroom pricing, and express local delivery.
            </p>

            {/* Prominent Exact NAP repetition for Local SEO */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
              <span className="font-extrabold uppercase tracking-wider text-amber-400 block">
                Official Google Business Profile NAP Data:
              </span>
              <p className="font-bold text-white">
                {BUSINESS_NAP.name}
              </p>
              <p className="text-slate-300">
                <strong>Address:</strong> {BUSINESS_NAP.address}
              </p>
              <p className="text-slate-300">
                <strong>Phone:</strong> <a href={`tel:${BUSINESS_NAP.phoneTel}`} className="text-amber-300 font-bold hover:underline">{BUSINESS_NAP.phoneFormatted}</a>
              </p>
              <p className="text-slate-300">
                <strong>Email:</strong> <a href={`mailto:${BUSINESS_NAP.email}`} className="text-blue-400 hover:underline">{BUSINESS_NAP.email}</a>
              </p>
              <p className="text-slate-300">
                <strong>Store Hours:</strong> {BUSINESS_NAP.workingHours}
              </p>
            </div>
          </div>

          {/* Core Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-100">
              Appliance Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {APPLIANCE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#appliances"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-500">•</span>
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-black uppercase tracking-widest text-slate-100 pt-3">
              Hyderabad Delivery Hubs
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Pahadi Shareef, Shamshabad, Airport Road, Chandrayangutta, Attapur, Gachibowli, Hitec City, Jubilee Hills, Banjara Hills, LB Nagar & Secunderabad.
            </p>
          </div>

          {/* Authorized Brands Matrix list */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-100">
              17 Authorized Brand Partners
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {ALL_BRANDS.map((brand) => (
                <span
                  key={brand.name}
                  className="text-[11px] font-semibold px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-colors"
                >
                  {brand.name}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_NAP.phoneTel}`}
                className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>Call +91 95050 66661</span>
              </a>
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-400">{BUSINESS_NAP.name}</strong>. All Rights Reserved.
            <div className="text-[11px] text-slate-600 mt-0.5">
              Authorized Large Home Appliance Showroom, Pahadi Shareef, Hyderabad - 500005, Telangana.
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>GST Registered Dealer</span>
            <span>•</span>
            <span>Google Verified Partner</span>
            <span>•</span>
            <span>Genuine Manufacturer Warranties</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

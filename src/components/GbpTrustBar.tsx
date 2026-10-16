import React from 'react';
import { Star, MapPin, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import { BUSINESS_NAP } from '../data/appliances';

export const GbpTrustBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 shadow-xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Google Verification & Rating Sync */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            {/* Google Icon Badge */}
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="font-extrabold text-slate-900 text-base sm:text-lg">
                  Google Verified Partner
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  Synced
                </span>
              </div>

              <div className="flex items-center gap-2 mt-0.5 justify-center sm:justify-start">
                <span className="text-xl font-black text-slate-900">{BUSINESS_NAP.googleRating}</span>
                <div className="flex items-center text-amber-400" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  ({BUSINESS_NAP.reviewsCount}+ Verified Hyderabad Reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Middle: Local SEO Title Banner */}
          <div className="text-center">
            <span className="inline-block text-xs uppercase tracking-wider font-extrabold text-slate-600 mb-0.5">
              Top-Rated Appliance Showroom in Hyderabad
            </span>
            <div className="text-sm font-semibold text-slate-800 flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Serving Pahadi Shareef, Shamshabad, Gachibowli & Greater Hyderabad</span>
            </div>
          </div>

          {/* Right: Direct Link to Google Maps / GBP */}
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_NAP.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-900 text-white text-xs sm:text-sm font-bold transition-all shadow-xs group"
              aria-label="View Google Business Profile and directions on Google Maps"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Official Warranty Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

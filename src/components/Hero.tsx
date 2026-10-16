import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Star, Truck, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_NAP } from '../data/appliances';

interface HeroProps {
  onOpenQuoteModal: (category?: string) => void;
  onExploreBrands: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreBrands }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden py-16 lg:py-24">
      {/* Background Decorative Grid and Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Local Value Prop & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Geo-Targeted Local SEO Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-200 text-xs sm:text-sm font-medium backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Pahadi Shareef • Rajiv Gandhi International Airport Road, Hyderabad</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight">
              Premium Large Home Appliances{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Direct From Authorized Brands
              </span>
            </h1>

            {/* Persuasive Local Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <span className="text-white font-bold">SRI LAKSHMI CHOWDHARY ENTERPRISES</span>, Hyderabad's premier destination for high-performance <strong className="text-white">LED TVs, Air Conditioners, Refrigerators, Washing Machines, and Dishwashers</strong>. Serving homeowners and commercial projects across Hyderabad with verified manufacturer warranties, unbeatable showroom pricing, and express delivery.
            </p>

            {/* Core Category Badges */}
            <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start pt-1">
              {['LED TVs', 'Air Conditioners (ACs)', 'Refrigerators', 'Washing Machines', 'Dishwashers'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{item}</span>
                </span>
              ))}
            </div>

            {/* Dual High-Converting CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Get Instant Quote</span>
              </button>

              <button
                onClick={onExploreBrands}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-white font-bold text-base transition-all hover:border-slate-500 cursor-pointer"
              >
                <span>Explore Our Brands</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>
            </div>

            {/* Quick Click-To-Call Direct Helper */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start text-sm text-slate-300">
              <span>Direct Showroom Helpline:</span>
              <a
                href={`tel:${BUSINESS_NAP.phoneTel}`}
                className="inline-flex items-center gap-1.5 font-bold text-amber-300 hover:text-amber-200 underline decoration-amber-400/50 underline-offset-4"
              >
                <Phone className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>+91 95050 66661</span>
              </a>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-400 text-xs">Pahadi Shareef Corridor</span>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-left">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">4.9 / 5.0 Rating</div>
                  <div className="text-[11px] text-slate-400">280+ GBP Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">100% Genuine</div>
                  <div className="text-[11px] text-slate-400">Brand Warranty</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <Truck className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Express Delivery</div>
                  <div className="text-[11px] text-slate-400">All Over Hyderabad</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <Award className="w-4 h-4 text-amber-300 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Best Pricing</div>
                  <div className="text-[11px] text-slate-400">Airport Road Direct</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-800/60 to-slate-900/90 p-5 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
              {/* Card Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Live Showroom Stock • 2026 Models
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                  GST Invoiced
                </span>
              </div>

              {/* Main Visual Image Banner */}
              <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-950 mb-4 group">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                  alt="Sri Lakshmi Chowdhary Enterprises Premium Home Appliances Showroom Hyderabad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                      Authorised Multi-Brand Showcase
                    </span>
                    <h3 className="text-white text-sm sm:text-base font-extrabold">
                      Television • AC • Refrigerator • Washing • Dishwasher
                    </h3>
                  </div>
                  <span className="px-2 py-1 rounded bg-amber-500 text-slate-950 text-xs font-black">
                    Up to 35% Off MRP
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 text-xs text-slate-300 mb-4">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    AC Cooling Range (Heavy Duty 52°C)
                  </span>
                  <span className="font-bold text-amber-300">Daikin • Mitsubishi • O General</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Cinematic 4K/8K TVs
                  </span>
                  <span className="font-bold text-amber-300">Sony XR • Samsung Neo QLED • LG</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Fabric & Dish Hygiene Care
                  </span>
                  <span className="font-bold text-amber-300">Bosch EcoSilence • LG AI DD</span>
                </div>
              </div>

              {/* Instant Call / Visit Prompt */}
              <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Visiting Us Today?</div>
                  <div className="text-[11px] text-blue-200">2-17, Pahadi Shareef, Airport Road</div>
                </div>
                <a
                  href={`tel:${BUSINESS_NAP.phoneTel}`}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  Call 9505066661
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

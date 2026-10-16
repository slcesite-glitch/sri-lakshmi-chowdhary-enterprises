import React, { useState } from 'react';
import {
  Truck,
  ShieldCheck,
  Wrench,
  BadgePercent,
  CheckCircle2,
  Clock,
  MapPin,
  Search,
  Sparkles
} from 'lucide-react';
import { LOCAL_VALUE_PILLARS, HYDERABAD_LOCALITIES, BUSINESS_NAP } from '../data/appliances';
import { getEstimatedDeliveryTimeline, isHyderabadPinCode } from '../utils/appliance-calc';

export const DeliveryAndServices: React.FC = () => {
  const [selectedLocality, setSelectedLocality] = useState<string>('Pahadi Shareef (500005)');
  const [customPin, setCustomPin] = useState<string>('');
  const [pinResult, setPinResult] = useState<string | null>(null);

  const handleCheckPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPin) return;
    if (isHyderabadPinCode(customPin)) {
      const timeline = getEstimatedDeliveryTimeline(customPin);
      setPinResult(`✅ Hyderabad PIN Verified: ${timeline}`);
    } else {
      setPinResult(`⚠️ PIN outside standard Hyderabad metro zone. Contact +91 95050 66661 for regional dispatch.`);
    }
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-7 h-7 text-blue-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-emerald-600" />;
      case 'Wrench': return <Wrench className="w-7 h-7 text-amber-500" />;
      case 'BadgePercent': return <BadgePercent className="w-7 h-7 text-rose-500" />;
      default: return <Truck className="w-7 h-7 text-blue-600" />;
    }
  };

  return (
    <section id="delivery" className="py-20 bg-slate-100/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-700 bg-blue-100/80 border border-blue-200 px-3.5 py-1 rounded-full">
            Hyderabad Local Fulfillment & Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Local Delivery & Authorized Installation Values
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Why customers across South Hyderabad, the Airport Corridor, and Hitec City prefer Sri Lakshmi Chowdhary Enterprises over anonymous e-commerce portals.
          </p>
        </div>

        {/* 4 Key Local Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {LOCAL_VALUE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-800">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Standard With Every Order</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Hyderabad Delivery Zone Checker */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left explanation */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Real-Time Logistics Schedule</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Check Delivery Timeline to Your Locality
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Select your Hyderabad area or enter your 6-digit PIN code to preview our dispatch turnaround time directly from our Pahadi Shareef warehouse on RGI Airport Road.
              </p>
            </div>

            {/* Right Interactive Checker */}
            <div className="lg:col-span-7 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Hyderabad Neighborhood / Suburb:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {HYDERABAD_LOCALITIES.slice(0, 6).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setSelectedLocality(loc);
                        setPinResult(null);
                      }}
                      className={`text-xs p-2 rounded-lg font-bold border transition-all text-left ${
                        selectedLocality === loc
                          ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result display */}
              <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-blue-950">
                    Dispatch to {selectedLocality}:
                  </div>
                  <div className="text-xs font-bold text-blue-800 mt-0.5">
                    {getEstimatedDeliveryTimeline(selectedLocality)}
                  </div>
                  <div className="text-[11px] text-blue-600 mt-0.5">
                    Includes safe transit, unpack verification, and brand demo coordination.
                  </div>
                </div>
              </div>

              {/* Pin code search form */}
              <form onSubmit={handleCheckPin} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 6-digit Hyderabad PIN (e.g. 500005)"
                    value={customPin}
                    onChange={(e) => setCustomPin(e.target.value)}
                    className="w-full text-xs py-2.5 pl-3 pr-8 rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5" />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-slate-900 hover:bg-blue-900 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  Verify PIN
                </button>
              </form>

              {pinResult && (
                <div className="text-xs font-semibold p-2.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                  {pinResult}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Phone, MessageSquare, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { APPLIANCE_CATEGORIES, ALL_BRANDS, BUSINESS_NAP, HYDERABAD_LOCALITIES } from '../data/appliances';
import { calculateQuoteEstimate, buildWhatsAppInquiryUrl } from '../utils/appliance-calc';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialBrand?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
  initialBrand
}) => {
  const [category, setCategory] = useState<string>(initialCategory || 'LED TVs & Smart Displays');
  const [brand, setBrand] = useState<string>(initialBrand || 'Sony');
  const [sizeOrCapacity, setSizeOrCapacity] = useState<string>('55 Inch');
  const [quantity, setQuantity] = useState<number>(1);
  const [deliveryArea, setDeliveryArea] = useState<string>('Pahadi Shareef (500005)');

  useEffect(() => {
    if (initialCategory) setCategory(initialCategory);
    if (initialBrand) setBrand(initialBrand);
  }, [initialCategory, initialBrand]);

  // Sync available brands when category changes
  const currentCategoryData = APPLIANCE_CATEGORIES.find(
    (c) => c.name.toLowerCase() === category.toLowerCase() || c.id === category.toLowerCase()
  ) || APPLIANCE_CATEGORIES[0];

  const availableBrands = currentCategoryData.popularBrands;
  const availableSizes = currentCategoryData.typicalSizes;

  // Ensure selected brand belongs to category
  useEffect(() => {
    if (!availableBrands.includes(brand)) {
      setBrand(availableBrands[0] || 'Sony');
    }
    if (!availableSizes.includes(sizeOrCapacity)) {
      setSizeOrCapacity(availableSizes[0] || 'Standard');
    }
  }, [category]);

  if (!isOpen) return null;

  const estimate = calculateQuoteEstimate({
    category,
    brand,
    sizeOrCapacity,
    quantity,
    deliveryArea
  });

  const formatCurrency = (val: number) => {
    return `Rs. ${val.toLocaleString('en-IN')}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 font-black">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 id="quote-modal-title" className="text-lg sm:text-xl font-black">
                Instant Showroom Price Estimator
              </h3>
              <p className="text-xs text-slate-300">
                Official wholesale pricing & availability in Hyderabad
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Controls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Appliance Category:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              >
                {APPLIANCE_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Brand:
              </label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              >
                {availableBrands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Typical Size / Capacity:
              </label>
              <select
                value={sizeOrCapacity}
                onChange={(e) => setSizeOrCapacity(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              >
                {availableSizes.map((sz) => (
                  <option key={sz} value={sz}>
                    {sz}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Hyderabad Delivery Area:
              </label>
              <select
                value={deliveryArea}
                onChange={(e) => setDeliveryArea(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              >
                {HYDERABAD_LOCALITIES.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Real-time Calculation Result Box */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs uppercase font-extrabold text-slate-500 block">
                  Estimated Showroom Price Range:
                </span>
                <span className="text-2xl sm:text-3xl font-black text-blue-900">
                  {formatCurrency(estimate.basePriceRange[0])} – {formatCurrency(estimate.basePriceRange[1])}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  *Indicative market range. Final invoice includes in-store dealer cashback.
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                100% Genuine GST Invoice
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2 text-slate-700">
                <Truck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Fulfillment:</span>
                  <span>{estimate.deliveryTimeline}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Official Warranty:</span>
                  <span>{estimate.warrantyPeriod}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Lock-in Actions */}
          <div className="space-y-3 pt-2">
            <a
              href={buildWhatsAppInquiryUrl({
                phone: BUSINESS_NAP.phoneRaw,
                category,
                brand,
                locality: deliveryArea
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm {brand} Price On WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_NAP.phoneTel}`}
              className="w-full py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-black text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call Showroom Manager: +91 95050 66661</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_NAP } from '../data/appliances';

interface FloatingCTAsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingCTAs: React.FC<FloatingCTAsProps> = ({ onOpenQuoteModal }) => {
  return (
    <>
      {/* Floating Action Buttons for Desktop / Tablet (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        {/* Instant Quote Pill */}
        <button
          onClick={onOpenQuoteModal}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
          aria-label="Open Instant Quote Estimator"
        >
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>Get Instant Quote</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/91${BUSINESS_NAP.phoneRaw}?text=${encodeURIComponent(
            'Hello Sri Lakshmi Chowdhary Enterprises! I am inquiring about large appliances from your website.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          aria-label="Chat with Showroom on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>

        {/* Click to Call */}
        <a
          href={`tel:${BUSINESS_NAP.phoneTel}`}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-blue-700 hover:bg-blue-600 text-white font-black text-xs shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          aria-label="Call Showroom at 9505066661"
        >
          <Phone className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>Call 9505066661</span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Sticky Bar for High Conversion */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:hidden flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_NAP.phoneTel}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-700 text-white font-black text-xs shadow-sm active:scale-95"
          aria-label="Call 9505066661"
        >
          <Phone className="w-3.5 h-3.5 text-amber-300" />
          <span>Call Showroom</span>
        </a>

        <a
          href={`https://wa.me/91${BUSINESS_NAP.phoneRaw}?text=${encodeURIComponent(
            'Hello Sri Lakshmi Chowdhary Enterprises! I am inquiring about appliances from your website.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-sm active:scale-95"
          aria-label="WhatsApp Chat"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="px-3 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-sm active:scale-95 cursor-pointer"
          aria-label="Quick Quote"
        >
          <Sparkles className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
};

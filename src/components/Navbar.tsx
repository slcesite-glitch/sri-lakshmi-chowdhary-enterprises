import React, { useState } from 'react';
import { Phone, Clock, MapPin, Menu, X, Shield, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_NAP } from '../data/appliances';

interface NavbarProps {
  onOpenQuoteModal: (category?: string, brand?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Appliances', href: '#appliances' },
    { name: 'Brands', href: '#brands' },
    { name: 'Local Delivery', href: '#delivery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Local SEO / Announcement Ribbon */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>2-17, Pahadi Shareef, RGI Airport Road, Hyderabad 500005</span>
            </span>
            <span className="hidden lg:inline text-slate-500">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open Today: 9:30 AM – 9:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
              <Shield className="w-3 h-3" />
              Authorized Brand Dealer
            </span>
            <a
              href={`mailto:${BUSINESS_NAP.email}`}
              className="hidden sm:inline hover:text-white transition-colors text-slate-400"
            >
              {BUSINESS_NAP.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 text-white flex items-center justify-center font-bold shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
              <span className="text-xl tracking-tighter font-black text-amber-300">SLC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-tight group-hover:text-blue-800 transition-colors uppercase">
                SRI LAKSHMI CHOWDHARY
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
                  ENTERPRISES
                </span>
                <span className="text-[10px] text-slate-500 font-medium hidden sm:inline">
                  | Large Home Appliances • Hyderabad
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-blue-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Quote</span>
            </button>

            {/* Click-To-Call Button prominently requested */}
            <a
              href={`tel:${BUSINESS_NAP.phoneTel}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-sm hover:shadow-md transition-all active:scale-95"
              aria-label="Call Sri Lakshmi Chowdhary Enterprises at 9505066661"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse text-amber-300" />
              <span>Call: 9505066661</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${BUSINESS_NAP.phoneTel}`}
              className="p-2 rounded-lg bg-blue-700 text-white"
              aria-label="Call Showroom"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-semibold text-slate-800 hover:text-blue-700 py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-xs"
            >
              <Sparkles className="w-4 h-4" />
              Get Instant Appliance Quote
            </button>
            <a
              href={`tel:${BUSINESS_NAP.phoneTel}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-700 text-white font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              Call Now: 9505066661
            </a>
            <a
              href={`https://wa.me/91${BUSINESS_NAP.phoneRaw}?text=${encodeURIComponent('Hi Sri Lakshmi Chowdhary Enterprises, I need details on large appliances in Hyderabad.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Navigation,
  Sparkles,
  Building2,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_NAP, HYDERABAD_LOCALITIES, APPLIANCE_CATEGORIES } from '../data/appliances';
import { isValidIndianPhone, buildWhatsAppInquiryUrl } from '../utils/appliance-calc';

interface ContactAndMapProps {
  prefilledCategory?: string;
}

export const ContactAndMap: React.FC<ContactAndMapProps> = ({ prefilledCategory }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: prefilledCategory || 'Air Conditioners (ACs)',
    locality: 'Pahadi Shareef (500005)',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeMapTab, setActiveMapTab] = useState<'map' | 'satellite'>('map');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile phone number is required';
    } else if (!isValidIndianPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-700 bg-blue-100/80 border border-blue-200 px-3.5 py-1 rounded-full">
            Local SEO & Showroom Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Connect With Our Hyderabad Showroom
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Get an instant official quotation, confirm in-stock inventory, or visit our showroom on Rajiv Gandhi International Airport Road in Pahadi Shareef.
          </p>
        </div>

        {/* Split Layout: Form on Left, NAP & Maps on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Premium Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Request Appliance Quotation
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Direct reply from showroom managers within 15–30 minutes
                </p>
              </div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Guaranteed Best Rate
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-emerald-950">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Your inquiry for <strong className="font-bold">{formData.category}</strong> with delivery to <strong className="font-bold">{formData.locality}</strong> has been logged. Our showroom manager will call you at <strong className="font-bold">{formData.phone}</strong> shortly.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={buildWhatsAppInquiryUrl({
                      phone: BUSINESS_NAP.phoneRaw,
                      name: formData.name,
                      category: formData.category,
                      locality: formData.locality
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open on WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        category: 'Air Conditioners (ACs)',
                        locality: 'Pahadi Shareef (500005)',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 py-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="client-name">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Varma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full text-xs sm:text-sm p-3 rounded-xl border bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 ${
                      errors.name ? 'border-rose-400 focus:ring-rose-500' : 'border-slate-300 focus:ring-blue-600'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="client-phone">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="e.g. 9505066661"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full text-xs sm:text-sm p-3 rounded-xl border bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-500' : 'border-slate-300 focus:ring-blue-600'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="client-email">
                      Email Address (Optional)
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full text-xs sm:text-sm p-3 rounded-xl border bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 ${
                        errors.email ? 'border-rose-400 focus:ring-rose-500' : 'border-slate-300 focus:ring-blue-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="client-category">
                      Appliance Category Interest <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="client-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    >
                      {APPLIANCE_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                      <option value="Multi-Appliance Full Home Package">
                        Full Villa / Apartment Package
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="client-locality">
                      Hyderabad Delivery Locality
                    </label>
                    <select
                      id="client-locality"
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    >
                      {HYDERABAD_LOCALITIES.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="client-message">
                    Specific Model Requirements / Questions
                  </label>
                  <textarea
                    id="client-message"
                    rows={3}
                    placeholder="e.g. Need pricing for Daikin 1.5 Ton 5-Star Split AC and Sony 55 inch Google TV with same-day delivery to Shamshabad..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Send Inquiry to Showroom</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Inquiries are processed directly at {BUSINESS_NAP.email} with no spam.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right: Exact NAP Data & Google Maps Embed */}
          <div className="lg:col-span-6 space-y-6">
            {/* Exact Google Business Profile NAP Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-blue-700 mb-2">
                <Building2 className="w-4 h-4 text-blue-700" />
                <span>Verified Google Business Profile NAP</span>
              </div>

              {/* Exact Name */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {BUSINESS_NAP.name}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                Authorized Large Home Appliance Showroom & Service Center
              </p>

              <div className="space-y-4 pt-5 mt-5 border-t border-slate-100 text-xs sm:text-sm">
                {/* Exact Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-slate-500 mb-0.5">
                      Showroom Physical Address:
                    </span>
                    <p className="font-semibold text-slate-800 leading-relaxed">
                      {BUSINESS_NAP.address}
                    </p>
                    <span className="text-xs text-blue-700 font-bold block mt-1">
                      Prominently located on RGI Airport Road corridor, easily accessible from Shamshabad & ORR.
                    </span>
                  </div>
                </div>

                {/* Click-to-Call Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-700 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-slate-500 mb-0.5">
                      Telephone / Click-To-Call:
                    </span>
                    <a
                      href={`tel:${BUSINESS_NAP.phoneTel}`}
                      className="font-black text-base text-blue-700 hover:text-blue-900 inline-flex items-center gap-2"
                      aria-label="Call Sri Lakshmi Chowdhary Enterprises at 9505066661"
                    >
                      <span>{BUSINESS_NAP.phoneFormatted}</span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Tap To Call
                      </span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-slate-500 mb-0.5">
                      Official Inquiries Email:
                    </span>
                    <a
                      href={`mailto:${BUSINESS_NAP.email}`}
                      className="font-bold text-slate-800 hover:text-blue-700 break-all"
                    >
                      {BUSINESS_NAP.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-slate-500 mb-0.5">
                      Showroom Operating Hours:
                    </span>
                    <p className="font-semibold text-slate-800">
                      {BUSINESS_NAP.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Visual Embed Container */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              {/* Map Toolbar Header */}
              <div className="px-5 py-3 bg-slate-900 text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span className="font-bold">Google Maps • Hyderabad Airport Corridor</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveMapTab('map')}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      activeMapTab === 'map' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Map
                  </button>
                  <button
                    onClick={() => setActiveMapTab('satellite')}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      activeMapTab === 'satellite' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Satellite
                  </button>
                </div>
              </div>

              {/* Interactive Stylized Map Canvas */}
              <div className="relative h-64 bg-slate-800 overflow-hidden group">
                <img
                  src={
                    activeMapTab === 'map'
                      ? 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80'
                      : 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80'
                  }
                  alt="Map Location - Sri Lakshmi Chowdhary Enterprises Pahadi Shareef Hyderabad"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Stylized Google Pin Marker */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex flex-col items-center">
                    <div className="bg-white text-slate-900 text-[11px] font-black px-3 py-1.5 rounded-xl shadow-2xl border border-slate-300 flex items-center gap-1.5 animate-bounce mb-1">
                      <div className="w-2 h-2 rounded-full bg-rose-600" />
                      <span>SRI LAKSHMI CHOWDHARY ENTERPRISES</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                      <MapPin className="w-4 h-4 fill-white" />
                    </div>
                    <div className="w-4 h-1 bg-black/40 rounded-full blur-xs mt-1" />
                  </div>
                </div>

                {/* Floating Directions Button */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200">
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block">
                      2-17, Pahadi Shareef (500005)
                    </span>
                    <span className="text-[10px] text-slate-500">
                      RGI Airport Road Corridor
                    </span>
                  </div>

                  <a
                    href={BUSINESS_NAP.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                    aria-label="Get driving directions to Sri Lakshmi Chowdhary Enterprises"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

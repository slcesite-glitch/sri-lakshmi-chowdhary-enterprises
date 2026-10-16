import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GbpTrustBar } from './components/GbpTrustBar';
import { ApplianceShowroom } from './components/ApplianceShowroom';
import { BrandMarquee } from './components/BrandMarquee';
import { DeliveryAndServices } from './components/DeliveryAndServices';
import { GoogleReviews } from './components/GoogleReviews';
import { ContactAndMap } from './components/ContactAndMap';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingCTAs } from './components/FloatingCTAs';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<string | undefined>();
  const [modalBrand, setModalBrand] = useState<string | undefined>();

  const handleOpenQuoteModal = (category?: string, brand?: string) => {
    setModalCategory(category);
    setModalBrand(brand);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setModalCategory(undefined);
    setModalBrand(undefined);
  };

  const handleExploreBrands = () => {
    const el = document.getElementById('brands');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Header / Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onExploreBrands={handleExploreBrands}
        />

        {/* 3. GBP Sync & Trust Bar */}
        <GbpTrustBar />

        {/* 4. Appliance Showroom (Grid Layout) */}
        <ApplianceShowroom onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5. Authorized Brands Marquee & Matrix */}
        <BrandMarquee onSelectBrandForQuote={handleOpenQuoteModal} />

        {/* 6. Local Delivery & Installation Values */}
        <DeliveryAndServices />

        {/* 7. Client Testimonials (Google Reviews) */}
        <GoogleReviews />

        {/* 8. Contact & Local SEO NAP Form with Map */}
        <ContactAndMap prefilledCategory={modalCategory} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Persistent Floating & Mobile CTAs */}
      <FloatingCTAs onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive Quotation Calculator Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialCategory={modalCategory}
        initialBrand={modalBrand}
      />
    </div>
  );
}

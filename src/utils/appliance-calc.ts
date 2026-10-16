/**
 * Pure calculation, validation, and estimation logic for Sri Lakshmi Chowdhary Enterprises.
 */

export interface QuoteEstimateParams {
  category: string;
  brand: string;
  sizeOrCapacity?: string;
  quantity?: number;
  deliveryArea?: string;
}

export interface QuoteEstimateResult {
  basePriceRange: [number, number];
  gstAmountRange: [number, number];
  estimatedTotalRange: [number, number];
  deliveryTimeline: string;
  installationSupport: string;
  warrantyPeriod: string;
}

/**
 * Validates an Indian 10-digit mobile phone number.
 */
export function isValidIndianPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s\-\+]/g, '');
  // Match either 10 digits starting with 6-9, or 12 digits starting with 91 followed by 6-9
  if (/^[6-9]\d{9}$/.test(cleaned)) {
    return true;
  }
  if (/^91[6-9]\d{9}$/.test(cleaned)) {
    return true;
  }
  return false;
}

/**
 * Formats a raw phone string into a clean Indian display format: +91 95050 66661
 */
export function formatIndianPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  if (digits.length === 12 && digits.startsWith('91')) {
    const core = digits.slice(2);
    return `+91 ${core.slice(0, 5)} ${core.slice(5)}`;
  }
  return phone;
}

/**
 * Validates Hyderabad PIN codes (500001 - 500099 range typically).
 */
export function isHyderabadPinCode(pin: string): boolean {
  const cleaned = pin.trim();
  if (!/^\d{6}$/.test(cleaned)) return false;
  return cleaned.startsWith('500');
}

/**
 * Calculates delivery turnaround based on proximity to Pahadi Shareef / RGI Airport Road (500005).
 */
export function getEstimatedDeliveryTimeline(areaOrPin: string): string {
  const normalized = areaOrPin.toLowerCase();
  if (
    normalized.includes('pahadi shareef') ||
    normalized.includes('500005') ||
    normalized.includes('shamshabad') ||
    normalized.includes('airport') ||
    normalized.includes('chandrayangutta')
  ) {
    return 'Same-Day Priority Express Delivery (Within 4 - 6 Hours)';
  }
  if (
    normalized.includes('gachibowli') ||
    normalized.includes('hitec') ||
    normalized.includes('banjara') ||
    normalized.includes('jubilee') ||
    normalized.includes('attapur') ||
    normalized.includes('lb nagar')
  ) {
    return 'Guaranteed Next-Day Delivery (Within 24 Hours)';
  }
  return 'Prompt Hyderabad Delivery (1 - 2 Business Days)';
}

/**
 * Calculates warranty description based on brand and category.
 */
export function getBrandWarrantyDescription(brand: string, category: string): string {
  const b = brand.toLowerCase();
  const c = category.toLowerCase();

  if (c.includes('washing') || c.includes('washer')) {
    if (b.includes('bosch')) {
      return '2 Years Comprehensive + 12 Years EcoSilence Motor Warranty';
    }
    return '2 Years Comprehensive + 10 Years Direct Drive Motor Warranty';
  }

  if (c.includes('air conditioner') || c.includes('air condition') || /\bac\b/.test(c)) {
    if (b.includes('mitsubishi') || b.includes('daikin') || b.includes('o general')) {
      return '1 Year Comprehensive + 10 Years Inverter Compressor Warranty';
    }
    return '1 Year Comprehensive + 5-10 Years Compressor Warranty';
  }

  if (c.includes('tv') || c.includes('display') || c.includes('television')) {
    if (b.includes('sony') || b.includes('lg') || b.includes('samsung')) {
      return '1 Year Manufacturer Warranty + Optional 2-Year Panel Protection';
    }
    return '1 Year Standard Brand Comprehensive Warranty';
  }

  if (c.includes('refrigerator') || c.includes('fridge')) {
    return '1 Year Comprehensive + 10-20 Years Digital Inverter Compressor Warranty';
  }

  if (c.includes('dish')) {
    return '2 Years Comprehensive + 10 Years Rust-Through Tub Warranty';
  }

  return '100% Genuine Authorized Manufacturer Warranty';
}

/**
 * Estimates quotation range based on category, brand, and size.
 */
export function calculateQuoteEstimate(params: QuoteEstimateParams): QuoteEstimateResult {
  const cat = params.category.toLowerCase();
  const qty = Math.max(1, params.quantity || 1);

  let low = 25000;
  let high = 45000;

  if (cat.includes('tv')) {
    low = 18000;
    high = 65000;
    if (params.sizeOrCapacity?.includes('65') || params.sizeOrCapacity?.includes('75')) {
      low = 55000;
      high = 145000;
    }
  } else if (cat.includes('ac') || cat.includes('air')) {
    low = 32000;
    high = 52000;
    if (params.brand.toLowerCase().includes('o general') || params.brand.toLowerCase().includes('mitsubishi')) {
      low = 45000;
      high = 68000;
    }
  } else if (cat.includes('refrig')) {
    low = 22000;
    high = 48000;
    if (params.sizeOrCapacity?.includes('Side') || params.sizeOrCapacity?.includes('570') || params.sizeOrCapacity?.includes('653')) {
      low = 62000;
      high = 110000;
    }
  } else if (cat.includes('wash')) {
    low = 19000;
    high = 42000;
    if (params.brand.toLowerCase().includes('bosch')) {
      low = 32000;
      high = 48000;
    }
  } else if (cat.includes('dish')) {
    low = 34000;
    high = 54000;
  }

  const baseLow = low * qty;
  const baseHigh = high * qty;
  const gstRate = 0.18; // 18% standard GST for appliances in India
  const gstLow = Math.round(baseLow * gstRate);
  const gstHigh = Math.round(baseHigh * gstRate);

  const deliveryTimeline = getEstimatedDeliveryTimeline(params.deliveryArea || 'Hyderabad');
  const warrantyPeriod = getBrandWarrantyDescription(params.brand, params.category);

  return {
    basePriceRange: [baseLow, baseHigh],
    gstAmountRange: [gstLow, gstHigh],
    estimatedTotalRange: [baseLow + gstLow, baseHigh + gstHigh],
    deliveryTimeline,
    installationSupport: 'Free Brand Authorized Professional Demo & Installation Support',
    warrantyPeriod
  };
}

/**
 * Builds a direct prefilled WhatsApp inquiry URL
 */
export function buildWhatsAppInquiryUrl(params: {
  phone: string;
  name?: string;
  category?: string;
  brand?: string;
  locality?: string;
}): string {
  const cleanPhone = params.phone.replace(/\D/g, '');
  let text = `Hello Sri Lakshmi Chowdhary Enterprises! I am interested in an appliance quotation.\n`;
  if (params.name) text += `• Name: ${params.name}\n`;
  if (params.category) text += `• Category: ${params.category}\n`;
  if (params.brand) text += `• Preferred Brand: ${params.brand}\n`;
  if (params.locality) text += `• Location: ${params.locality}\n`;
  text += `Please share best showroom price & same-day delivery availability.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

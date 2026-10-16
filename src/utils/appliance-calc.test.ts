import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidIndianPhone,
  formatIndianPhone,
  isHyderabadPinCode,
  getEstimatedDeliveryTimeline,
  getBrandWarrantyDescription,
  calculateQuoteEstimate,
  buildWhatsAppInquiryUrl
} from './appliance-calc.ts';

test('validates 10-digit Indian mobile phone numbers accurately', () => {
  assert.equal(isValidIndianPhone('9505066661'), true);
  assert.equal(isValidIndianPhone('+91 95050 66661'), true);
  assert.equal(isValidIndianPhone('919505066661'), true);
  assert.equal(isValidIndianPhone('8888899999'), true);
  assert.equal(isValidIndianPhone('7123456789'), true);

  // Invalid cases
  assert.equal(isValidIndianPhone('12345'), false);
  assert.equal(isValidIndianPhone('5505066661'), false); // starts with 5
  assert.equal(isValidIndianPhone(''), false);
});

test('formats Indian phone numbers into clean readable spaced format', () => {
  assert.equal(formatIndianPhone('9505066661'), '+91 95050 66661');
  assert.equal(formatIndianPhone('919505066661'), '+91 95050 66661');
});

test('identifies Hyderabad area pin codes starting with 500', () => {
  assert.equal(isHyderabadPinCode('500005'), true); // Pahadi Shareef
  assert.equal(isHyderabadPinCode('500032'), true); // Gachibowli
  assert.equal(isHyderabadPinCode('500081'), true); // Madhapur
  assert.equal(isHyderabadPinCode('560001'), false); // Bangalore
  assert.equal(isHyderabadPinCode('400001'), false); // Mumbai
  assert.equal(isHyderabadPinCode('invalid'), false);
});

test('returns priority same-day delivery for Pahadi Shareef / Airport Road corridor', () => {
  const resultLocal = getEstimatedDeliveryTimeline('Pahadi Shareef (500005)');
  assert.match(resultLocal, /Same-Day Priority Express/);

  const resultAirport = getEstimatedDeliveryTimeline('Shamshabad / RGI Airport Corridor');
  assert.match(resultAirport, /Same-Day Priority Express/);

  const resultGachibowli = getEstimatedDeliveryTimeline('Gachibowli');
  assert.match(resultGachibowli, /Guaranteed Next-Day Delivery/);
});

test('returns specific manufacturer warranty descriptions', () => {
  const acWarranty = getBrandWarrantyDescription('MITSUBISHI', 'Air Conditioners');
  assert.match(acWarranty, /10 Years Inverter Compressor/);

  const boschWarranty = getBrandWarrantyDescription('BOSCH', 'Washing Machines');
  assert.match(boschWarranty, /12 Years EcoSilence Motor/);
});

test('computes estimated quotation range and total with GST correctly', () => {
  const quote = calculateQuoteEstimate({
    category: 'Air Conditioners',
    brand: 'Daikin',
    quantity: 1,
    deliveryArea: 'Pahadi Shareef'
  });

  assert.equal(quote.basePriceRange[0] > 0, true);
  assert.equal(quote.basePriceRange[1] > quote.basePriceRange[0], true);
  assert.equal(quote.estimatedTotalRange[0] > quote.basePriceRange[0], true);
  assert.match(quote.deliveryTimeline, /Same-Day/);
});

test('builds compliant WhatsApp inquiry link with encoded text', () => {
  const link = buildWhatsAppInquiryUrl({
    phone: '9505066661',
    name: 'Vikram',
    category: 'LED TVs',
    brand: 'Sony',
    locality: 'Shamshabad'
  });

  assert.match(link, /https:\/\/wa\.me\/9505066661/);
  assert.match(link, /Sony/);
  assert.match(link, /LED%20TVs/);
});

export interface BrandInfo {
  name: string;
  category: string[];
  countryOfOrigin?: string;
  tagline: string;
  logoText: string;
  badge?: string;
}

export interface ApplianceCategory {
  id: string;
  name: string;
  title: string;
  tagline: string;
  popularBrands: string[];
  keyFeatures: string[];
  icon: string;
  image: string;
  typicalSizes: string[];
  startingPrice: string;
  popularModels: {
    name: string;
    brand: string;
    highlights: string;
    warranty: string;
  }[];
}

export const BUSINESS_NAP = {
  name: "SRI LAKSHMI CHOWDHARY ENTERPRISES",
  shortName: "Sri Lakshmi Chowdhary Appliances",
  address: "2-17, PAHADI SHAREEF, RAJIV GANDHI INTERNATIONAL AIRPORT ROAD, HYDERABAD - PIN CODE- 500005, TELANGANA",
  street: "2-17, Pahadi Shareef, Rajiv Gandhi International Airport Road",
  locality: "Pahadi Shareef / RGI Airport Corridor",
  city: "Hyderabad",
  state: "Telangana",
  pincode: "500005",
  phoneRaw: "9505066661",
  phoneFormatted: "+91 95050 66661",
  phoneTel: "+919505066661",
  email: "srilakshmichowdharyenterprises@gmail.com",
  mapsUrl: "https://maps.google.com/?q=2-17+Pahadi+Shareef+Rajiv+Gandhi+International+Airport+Road+Hyderabad+500005",
  googleRating: 4.9,
  reviewsCount: 284,
  workingHours: "Monday – Sunday: 9:30 AM – 9:00 PM (Open 7 Days)",
};

export const APPLIANCE_CATEGORIES: ApplianceCategory[] = [
  {
    id: "led-tvs",
    name: "LED TVs & Smart Displays",
    title: "Ultra HD 4K, OLED & QLED TVs",
    tagline: "Experience cinematic immersion with the world's leading display brands at genuine authorized prices.",
    popularBrands: ["Sony", "SAMSUNG", "LG", "Vu", "TCL", "MI", "Hisense"],
    keyFeatures: [
      "4K Ultra HD & 8K Neo QLED / OLED Displays",
      "Dolby Vision Atmos, HDR10+ & XR Cognitive Processors",
      "Google TV, Tizen OS & webOS Smart Ecosystems",
      "120Hz Fast Refresh Rate for PS5 / Xbox Gaming",
      "Bezel-less Frameless Aesthetics & Acoustic Surface Sound"
    ],
    icon: "Tv",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    typicalSizes: ["32 Inch", "43 Inch", "50 Inch", "55 Inch", "65 Inch", "75+ Inch"],
    startingPrice: "Rs. 12,490",
    popularModels: [
      { name: "Sony BRAVIA XR Series 4K Google TV", brand: "Sony", highlights: "Cognitive Processor XR, Acoustic Multi-Audio", warranty: "1+2 Years Extended" },
      { name: "SAMSUNG Crystal 4K Vivid Pro / Neo QLED", brand: "SAMSUNG", highlights: "Dynamic Crystal Color, Motion Xcelerator", warranty: "1 Year Comprehensive + 1 Year Panel" },
      { name: "LG OLED evo C3/G3 4K Cinema TV", brand: "LG", highlights: "Self-lit OLED Pixels, α9 AI Processor Gen6", warranty: "3 Years Comprehensive on Panel" },
      { name: "Vu Masterpiece & GloLED Series", brand: "Vu", highlights: "Built-in Soundbar, 400 Nits Brightness", warranty: "1 Year Official" },
      { name: "TCL Mini-LED & QLED Android TV", brand: "TCL", highlights: "144Hz VRR, Game Master 2.0", warranty: "1 Year" },
      { name: "MI X-Pro 4K HDR Series", brand: "MI", highlights: "PatchWall+ with 4K Dolby Audio", warranty: "1 Year" },
      { name: "Hisense ULED Tornado Edition", brand: "Hisense", highlights: "102W JBL Sound, Full Array Local Dimming", warranty: "2 Years Comprehensive" }
    ]
  },
  {
    id: "air-conditioners",
    name: "Air Conditioners (ACs)",
    title: "Split, Inverter & Heavy Commercial ACs",
    tagline: "Beats the scorching Hyderabad summer with whisper-quiet, heavy-duty cooling engineered for 52°C ambient heat.",
    popularBrands: ["MITSUBISHI", "Daikin", "Bluestar", "O General", "HITACHI", "Lloyd", "Voltas"],
    keyFeatures: [
      "100% Grooved Copper Condenser with Anti-Corrosive Blue/Gold Fin",
      "Heavy Inverter Rotary Compressors rated up to 52°C–55°C",
      "5-Star & 3-Star BEE Energy Efficiency with eco-friendly R32 refrigerant",
      "PM 2.5 Anti-Bacterial Air Filtration with Dual Deodorization",
      "Stabilizer-Free Operation across 130V – 280V Hyderabad power fluctuations"
    ],
    icon: "Wind",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    typicalSizes: ["1.0 Ton", "1.5 Ton", "2.0 Ton", "2.5 Ton Heavy", "Cassette / Tower"],
    startingPrice: "Rs. 28,990",
    popularModels: [
      { name: "MITSUBISHI Heavy Industries Inverter AC", brand: "MITSUBISHI", highlights: "Jet Air Flow Technology, 15m Long Throw", warranty: "10 Yrs Compressor + 5 Yrs PCB" },
      { name: "Daikin Triple Display 5-Star Inverter", brand: "Daikin", highlights: "Dew Clean Technology, Coanda Airflow", warranty: "10 Yrs Compressor Warranty" },
      { name: "O General Tropical Inverter Heavy AC", brand: "O General", highlights: "Extreme Cooling at 55°C, Hyper Tropical Spec", warranty: "5 Years Comprehensive" },
      { name: "Bluestar Smart Wi-Fi 5-Star Split AC", brand: "Bluestar", highlights: "Precision Cooling 0.5°C, Brushless Motor", warranty: "10 Yrs Compressor" },
      { name: "HITACHI Kashikoi Intelligent Inverter", brand: "HITACHI", highlights: "FrostWash Self-Clean, Wave Blade Fan", warranty: "10 Yrs Compressor" },
      { name: "Voltas Maha Adjustable Inverter AC", brand: "Voltas", highlights: "Multiple Tonnage Modes, Superdry Mode", warranty: "10 Yrs Compressor" },
      { name: "Lloyd Heavy Duty 5-Star Rapid Cool", brand: "Lloyd", highlights: "Cools in 45 seconds at 60°C", warranty: "10 Yrs Compressor" }
    ]
  },
  {
    id: "refrigerators",
    name: "Refrigerators",
    title: "Double Door, Side-by-Side & French Door Refrigerators",
    tagline: "Keep perishables crisp and fresh with multi-airflow frost-free cooling and smart inverter compressors.",
    popularBrands: ["SAMSUNG", "LG", "Whirlpool", "Haier"],
    keyFeatures: [
      "Digital Inverter & Smart Inverter Compressors (10-20 Year Warranty)",
      "Twin Cooling Plus / Dual Fan Frost-Free Technology",
      "Convertible 5-in-1 Storage Modes (Normal, Extra Fridge, Seasonal, Vacation)",
      "Toughened Glass Shelves capable of holding up to 175kg",
      "Moist Balance Crisper & Hygiene Fresh+ Odor Elimination"
    ],
    icon: "Refrigerator",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=800&q=80",
    typicalSizes: ["236 Litres", "324 Litres", "415 Litres", "570L Side-by-Side", "653L French Door"],
    startingPrice: "Rs. 18,490",
    popularModels: [
      { name: "SAMSUNG Side-by-Side with Food Showcase", brand: "SAMSUNG", highlights: "SpaceMax Technology, All-Around Cooling", warranty: "20 Years on Compressor" },
      { name: "LG Smart Inverter Double Door Frost-Free", brand: "LG", highlights: "Door Cooling+, Smart Diagnosis", warranty: "10 Years on Smart Inverter" },
      { name: "Whirlpool IntelliFresh Pro Bottom Mount", brand: "Whirlpool", highlights: "Microblock Technology, 15 Days Garden Fresh", warranty: "10 Years on Compressor" },
      { name: "Haier Triple Inverter & Dual Fan Frost Free", brand: "Haier", highlights: "1-Hour Icing Technology, 83% Fridge Space", warranty: "10 Years on Compressor" }
    ]
  },
  {
    id: "washing-machines",
    name: "Washing Machines",
    title: "Front Load, Top Load & Smart Washer Dryers",
    tagline: "Flawless fabric care, allergen removal, and deep dirt extraction with European and Asian engineering.",
    popularBrands: ["BOSCH", "LG", "SAMSUNG", "Whirlpool"],
    keyFeatures: [
      "EcoSilence Drive / AI Direct Drive Inverter Motors",
      "Steam Hygiene & ActiveWater Plus water-saving sensors",
      "1200 – 1400 RPM spin speed for 90% dry clothes",
      "Built-in Heater for 60°C Germ Shield Allergy Care",
      "Anti-Vibration Side Walls for noiseless midnight laundry"
    ],
    icon: "Shirt",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    typicalSizes: ["7.0 Kg", "8.0 Kg", "9.0 Kg", "10.5 Kg", "12 Kg Heavy Wash"],
    startingPrice: "Rs. 16,990",
    popularModels: [
      { name: "BOSCH Serie 6 Front Load with EcoSilence", brand: "BOSCH", highlights: "Anti-Tangle program, SpeedPerfect 65% faster", warranty: "2 Yrs Product + 12 Yrs Motor" },
      { name: "LG AI DD™ Intelligent Front Load", brand: "LG", highlights: "TurboWash 360, Steam+ Wrinkle Care", warranty: "10 Years Direct Drive Motor" },
      { name: "SAMSUNG EcoBubble AI Control Washer", brand: "SAMSUNG", highlights: "Hygiene Steam, BubbleStorm Soft Wash", warranty: "20 Years DIT Motor" },
      { name: "Whirlpool 360 BloomWash Pro Top Load", brand: "Whirlpool", highlights: "Hot Catalytic Soak, Hexa Bloom Impeller", warranty: "10 Years Motor" }
    ]
  },
  {
    id: "dishwashers",
    name: "Dishwashers",
    title: "Premium Free-Standing & Built-In Dishwashers",
    tagline: "Designed specifically for greasy Indian cookware, kadhais, and masala stains with 70°C Intensive sanitization.",
    popularBrands: ["BOSCH", "LG", "SAMSUNG"],
    keyFeatures: [
      "Intensive 70°C Wash Cycle tailored for burnt oil and kadhai stains",
      "Zeolith / Turbo Drying with natural minerals for spotless glassware",
      "Adjustable VarioFlex Racks with Rackmatic 3-stage height adjustment",
      "AquaStop 100% lifetime protection against kitchen water damage",
      "Whisper-quiet 42dB – 44dB operation with EcoSilence Drive"
    ],
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    typicalSizes: ["12 Place Settings", "13 Place Settings", "14 Place Settings", "15 Place Settings"],
    startingPrice: "Rs. 34,490",
    popularModels: [
      { name: "BOSCH Serie 4 / Serie 6 Free-Standing Dishwasher", brand: "BOSCH", highlights: "Kadhai Intensive 70°, PerfectDry with Zeolith", warranty: "2 Yrs Comprehensive + 10 Yrs Rust-through" },
      { name: "LG TrueSteam QuadWash Dishwasher", brand: "LG", highlights: "Multi-motion spray arms, Dual Zone Wash", warranty: "10 Years Inverter Direct Drive" },
      { name: "SAMSUNG IntensiveWash Digital Inverter", brand: "SAMSUNG", highlights: "Auto Door Open Dry, Stainless Steel Tub", warranty: "10 Years Digital Inverter" }
    ]
  }
];

export const ALL_BRANDS: BrandInfo[] = [
  { name: "Sony", category: ["LED TVs"], countryOfOrigin: "Japan", tagline: "Bravia XR Cognitive & OLED Visual Masterpieces", logoText: "SONY", badge: "Premium Audio-Visual" },
  { name: "SAMSUNG", category: ["LED TVs", "Refrigerators", "Washing Machines", "Dishwashers"], countryOfOrigin: "South Korea", tagline: "Neo QLED, Bespoke Refrigeration & AI Washers", logoText: "SAMSUNG", badge: "Global Leader" },
  { name: "LG", category: ["LED TVs", "Refrigerators", "Washing Machines", "Dishwashers"], countryOfOrigin: "South Korea", tagline: "OLED Evo, AI Direct Drive & Dual Inverter Tech", logoText: "LG", badge: "Customer Favorite" },
  { name: "Vu", category: ["LED TVs"], countryOfOrigin: "India / USA", tagline: "Cinematic GloLED & High-Bright Display Panels", logoText: "Vu", badge: "Cinema Sound" },
  { name: "TCL", category: ["LED TVs"], countryOfOrigin: "Global", tagline: "Mini-LED & 144Hz Gaming Display Pioneer", logoText: "TCL", badge: "Next-Gen Tech" },
  { name: "MI", category: ["LED TVs"], countryOfOrigin: "Global", tagline: "Smart 4K Vivid Displays & Android TV Ecosystem", logoText: "MI", badge: "Smart Value" },
  { name: "Hisense", category: ["LED TVs"], countryOfOrigin: "Global", tagline: "ULED 4K Displays & High-Wattage Audio", logoText: "Hisense", badge: "High Fidelity" },
  { name: "MITSUBISHI", category: ["Air Conditioners"], countryOfOrigin: "Japan", tagline: "Heavy Industries Unrivaled Cooling Durability", logoText: "MITSUBISHI", badge: "Heavy-Duty Elite" },
  { name: "Daikin", category: ["Air Conditioners"], countryOfOrigin: "Japan", tagline: "World #1 Air Conditioning with Streamer Tech", logoText: "DAIKIN", badge: "Japanese Pioneer" },
  { name: "Bluestar", category: ["Air Conditioners"], countryOfOrigin: "India", tagline: "Precision Inverter Cooling for Residential & Commercial", logoText: "BLUE STAR", badge: "Commercial Grade" },
  { name: "O General", category: ["Air Conditioners"], countryOfOrigin: "Japan", tagline: "Extreme Heat Cooling up to 55°C Tropical Spec", logoText: "O GENERAL", badge: "Extreme Cooling" },
  { name: "HITACHI", category: ["Air Conditioners"], countryOfOrigin: "Japan", tagline: "FrostWash Inverter Air Conditioning Systems", logoText: "HITACHI", badge: "Engineering Pure" },
  { name: "Lloyd", category: ["Air Conditioners"], countryOfOrigin: "India (Havells)", tagline: "Heavy Duty Rapid 45-Second Fast Chill Tech", logoText: "LLOYD", badge: "Rapid Chill" },
  { name: "Voltas", category: ["Air Conditioners"], countryOfOrigin: "India (Tata)", tagline: "India's Trusted Brand for All-Weather Inverter ACs", logoText: "VOLTAS", badge: "Tata Trusted" },
  { name: "BOSCH", category: ["Washing Machines", "Dishwashers"], countryOfOrigin: "Germany", tagline: "German Precision Engineering & Zeolith Dishwashing", logoText: "BOSCH", badge: "German Precision" },
  { name: "Whirlpool", category: ["Refrigerators", "Washing Machines"], countryOfOrigin: "USA", tagline: "6th Sense Intelligence for Home Freshness & Care", logoText: "WHIRLPOOL", badge: "Intelligent Living" },
  { name: "Haier", category: ["Refrigerators"], countryOfOrigin: "Global", tagline: "Bottom Mounted & Triple Inverter Convertible Refrigerators", logoText: "HAIER", badge: "Modern Living" },
];

export const GOOGLE_REVIEWS = [
  {
    author: "K. Ramesh Varma",
    avatarColor: "bg-blue-600",
    initials: "KR",
    rating: 5,
    relativeTime: "2 weeks ago",
    locality: "Airport Colony, Shamshabad (Hyderabad)",
    productPurchased: "2x Daikin 1.5T 5-Star Inverter ACs + Sony 65' Bravia",
    comment: "Outstanding experience buying for our new villa on Airport Road. Sri Lakshmi Chowdhary Enterprises gave a price that beat major chain stores in Banjara Hills by almost 12%. Delivered on the same day to Pahadi Shareef area and Daikin certified engineers finished installation next morning. Genuine GST invoice and company warranty confirmed on the portal.",
    helpfulCount: 19
  },
  {
    author: "Dr. Sunitha Reddy",
    avatarColor: "bg-emerald-600",
    initials: "SR",
    rating: 5,
    relativeTime: "1 month ago",
    locality: "Gachibowli Financial District, Hyderabad",
    productPurchased: "BOSCH Serie 6 Front Load Washer & Series 4 Dishwasher",
    comment: "Very knowledgeable team! They explained exactly how the Bosch Intensive 70° program clears oily Indian vessels and masala pans without pre-rinsing. Delivery was fast and technician demo was crystal clear. Highly recommend them for anyone in South Hyderabad looking for genuine showroom service with personal attention.",
    helpfulCount: 24
  },
  {
    author: "Mohammed Asadullah",
    avatarColor: "bg-amber-600",
    initials: "MA",
    rating: 5,
    relativeTime: "2 months ago",
    locality: "Chandrayangutta / Pahadi Shareef, Hyderabad",
    productPurchased: "SAMSUNG 653L French Door Refrigerator & Voltas Split AC",
    comment: "This is our go-to appliance store. Mr. Chowdhary and his staff are extremely transparent with pricing. No hidden fees or inflated MRP tricks. They delivered our double-door fridge with utmost care through our narrow stairwell without a single scratch. Proud to have such a top-tier showroom right here on RGI Airport Road!",
    helpfulCount: 31
  }
];

export const LOCAL_VALUE_PILLARS = [
  {
    title: "Express Hyderabad Delivery",
    desc: "Same-day priority delivery across Pahadi Shareef, Shamshabad, Airport Road, and guaranteed 24-hr transit to Gachibowli, Jubilee Hills, and Secunderabad.",
    icon: "Truck",
    badge: "Same-Day Dispatch"
  },
  {
    title: "100% Brand Certified Warranty",
    desc: "Direct authorized partnership with Sony, Samsung, Daikin, Bosch, LG, Mitsubishi & more. You receive legitimate GST billing with manufacturer direct warranty.",
    icon: "ShieldCheck",
    badge: "Official Invoicing"
  },
  {
    title: "Authorized Technician Setup",
    desc: "No third-party local mechanics. All installations and wall mountings are performed exclusively by brand-certified engineers with copper piping verification.",
    icon: "Wrench",
    badge: "Trained Experts"
  },
  {
    title: "Unbeatable RGI Airport Road Pricing",
    desc: "Wholesale & retail direct pricing that systematically matches or beats big-box retail chains, with attractive instant cashback and exchange bonuses.",
    icon: "BadgePercent",
    badge: "Direct Wholesale"
  }
];

export const HYDERABAD_LOCALITIES = [
  "Pahadi Shareef (500005)",
  "Shamshabad / RGI Airport Corridor",
  "Chandrayangutta / Barkas",
  "Rajendra Nagar / Attapur",
  "Gachibowli & Financial District",
  "Hitec City & Madhapur",
  "Jubilee Hills & Banjara Hills",
  "LB Nagar & Dilsukhnagar",
  "Mehdipatnam & Tolichowki",
  "Secunderabad & Begumpet",
  "Other Hyderabad Areas"
];

export interface SolutionItem {
  id: string;
  icon: 'building' | 'briefcase' | 'map' | 'warehouse' | 'landmark' | 'megaphone';
  title: string;
  subtitle?: string;
  bullets: string[];
}

export interface WhyInvestPoint {
  id: string;
  title: string;
  description: string;
}

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  imageUrl?: string;
  imageAlt: string;
  fallbackIcon: 'bed' | 'skyline' | 'marina' | 'villa';
}

export interface FooterLocationGroup {
  heading: string;
  items: string[];
}

export const LOGO_SRC = '/assets/logo.png';

export const HERO_DATA = {
  phone: '+91 9029936620',
  navLinks: [
    'Home',
    'Ai Calling Agent',
    'About Us',
    'Articles & Blogs',
    "FAQ's",
    'Advertise With Us',
    'Contact Us',
  ],
  badgePercent: '0%',
  badgeText: 'SERVICE FEE FOR BUYER',
  headlineHighlight: 'Property search',
  headlineRest: 'just got easier with our Integrated Proptech Approach!',
  searchFields: [
    { label: 'CITY', value: 'City', icon: 'search' as const, hasChevron: false },
    { label: 'CATEGORY', value: 'Select Category', icon: 'building' as const, hasChevron: true },
    { label: 'MIN BUDGET', value: 'Min Budget', icon: 'rupee' as const, hasChevron: true },
    { label: 'MAX BUDGET', value: 'Max Budget', icon: 'rupee' as const, hasChevron: true },
  ],
  searchButton: 'FYND NOW',
  heroImageUrl: '/assets/photos/hero.jpg',
  heroImageAlt: 'Close-up upward view of a modern glass skyscraper facade in blue tones',
};

export const TOP_CITIES: string[] = [
  'Mumbai',
  'Dubai',
  'Pune',
  'Navi Mumbai',
  'Bengaluru',
  'Thane',
  'Hyderabad',
  'Gurugram',
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'residential',
    icon: 'building',
    title: 'Residential Properties',
    subtitle: 'Apartments, Villas & Bungalows',
    bullets: [
      'State of the art infrastructure',
      'Class apart amenities',
      'Coveted Lifestyle and Convenient Living',
    ],
  },
  {
    id: 'commercial',
    icon: 'briefcase',
    title: 'Commercial Offices & Shops',
    bullets: [
      'More Capital Gains',
      'Attractive Rental income',
      'Earn up to 14% IRR',
    ],
  },
  {
    id: 'plots',
    icon: 'map',
    title: 'Plots and Farmlands',
    bullets: [
      'Strategically located',
      'Starting from 15 lakhs',
      'Earning up to 22% IRR',
    ],
  },
  {
    id: 'warehouse',
    icon: 'warehouse',
    title: 'Warehouse and Industrial parks',
    bullets: [
      'Greater ROI',
      'Industry estimated to grow by 45.9 million sq ft in 2022-23',
      'Business friendly policies',
    ],
  },
  {
    id: 'dubai',
    icon: 'landmark',
    title: 'Invest in Dubai',
    bullets: [
      'Higher Rental yields',
      'Premium Properties',
      'Renowned Developers',
      'Ultra-modern infrastructure',
    ],
  },
  {
    id: 'lead-gen',
    icon: 'megaphone',
    title: 'Lead Generation And Conversion',
    bullets: [
      'Tech-enabled solutions',
      'Lead generation for developers',
      'Performance Marketing',
      'Remarketing',
    ],
  },
];

export const WHY_INVEST_INTRO =
  'PropfyndX is the answer to all your real estate search queries and questions. If you want a wide variety of the best real estate new projects in India & Dubai at exclusive and best prices then look no further. Providing a safe platform with the convenience of everything under one roof, PropfyndX lets you find and book visits to your shortlisted new projects in 2 easy steps.';

export const WHY_INVEST_LEFT: WhyInvestPoint[] = [
  {
    id: 'tech-advertising',
    title: 'Tech-Enabled Advertising Platform',
    description:
      'PropfyndX leverages targeted advertising to ensure your project reaches the right audience at the right time. We maximize engagement, increase lead generation, and enhance conversion to showcase properties effectively and achieve sales goals.',
  },
  {
    id: 'ml-lead-gen',
    title: 'Machine learning-based lead generation',
    description:
      'PropfyndX harnesses the power of data to optimize the lead generation process. By analyzing user behaviour and preferences, our machine learning algorithms identify high-quality leads, predict buyer intent, and deliver personalized recommendations.',
  },
];

export const WHY_INVEST_RIGHT: WhyInvestPoint[] = [
  {
    id: 'schedule-visits',
    title: 'Schedule Site Visits',
    description:
      'We help buyers book site visits at their preferred times, while developers can manage and track these appointments effortlessly.',
  },
  {
    id: 'india-dubai-services',
    title: 'India and Dubai-focused Services',
    description:
      "Whether you're a developer in India or Dubai, PropfyndX provides tailored lead generation, advertising and conversion solutions designed to maximize your project's visibility. With insights into local market trends and buyer preferences, we help developers connect with the right audience.",
  },
];

export const DEVELOPERS: string[] = [
  'STG',
  'Sumit Group',
  'Sunraj Construction',
  'Tata Housing',
  'Tharwani Realty',
  'The Wadhwa Group',
];

export const CTA_DATA = {
  eyebrow: 'FREE EXPERT CONSULTATION',
  heading: 'Looking for the right property?',
  subheading: 'Consult your investment experts today!',
  placeholder: 'Enter Your Mobile Number *',
  buttonLabel: 'Call Me Back',
  imageUrl: '/assets/photos/cta-advisor.jpg',
  imageAlt: 'Friendly female real estate advisor wearing a navy blazer and headset in a modern glass office',
};

export const BLOGS: BlogItem[] = [
  {
    id: 'studio-dubai-budgets',
    title: 'Studio Apartment for Sale in Dubai: What Can You Buy on Different Budgets?',
    date: '17th Nov, 2026',
    imageUrl: '/assets/photos/blog-1.jpg',
    imageAlt: 'Bright modern studio apartment interior with a city view',
    fallbackIcon: 'bed',
  },
  {
    id: 'buying-dubai-from-india',
    title: 'Buying Property in Dubai from India: A Step-by-Step Guide for Indian Buyers',
    date: '13th Nov, 2026',
    imageUrl: '/assets/photos/blog-2.jpg',
    imageAlt: 'Dubai skyline with Burj Khalifa at dusk',
    fallbackIcon: 'skyline',
  },
  {
    id: 'dubai-investment-compare',
    title: 'Dubai Investment Properties: How to Compare Rental Income, Costs and Long-Term Value',
    date: '30th Oct, 2026',
    imageUrl: '/assets/photos/blog-3.jpg',
    imageAlt: 'Dubai Marina high-rise towers and the waterfront',
    fallbackIcon: 'marina',
  },
  {
    id: 'villas-in-dubai-7-things',
    title: 'Looking for Villas to Buy in Dubai? 7 Things to Check Before Making a Decision',
    date: '14th Oct, 2026',
    imageUrl: '/assets/photos/blog-4.jpg',
    imageAlt: 'Luxury villa exterior with a swimming pool',
    fallbackIcon: 'villa',
  },
];

export const FOOTER_DATA = {
  companyLinks: [
    'Home',
    'About Us',
    'Articles & Blogs',
    "FAQ's",
    'Policy of Use',
    'RERA Disclaimer',
  ],
  email: 'connect@propfyndx.com',
  phone: '+91 9029936620',
  exploreChips: [
    '1 BHK In Mumbai',
    '2 BHK In Mumbai',
    '3 BHK In Mumbai',
    '1 BHK In Navi Mumbai',
    '2 BHK In Navi Mumbai',
    '3 BHK In Navi Mumbai',
    '1 BHK In Thane',
    '2 BHK In Thane',
    '3 BHK In Thane',
    '1 BHK In Pune',
    '2 BHK In Pune',
    '3 BHK In Pune',
  ],
  moreLocations: [
    {
      heading: 'Residential Properties In Hinjawadi',
      items: ['1 BHK In Hinjawadi', '2 BHK In Hinjawadi', '3 BHK In Hinjawadi'],
    },
    {
      heading: 'Properties In South Mumbai',
      items: ['Properties In Kandivali', 'Properties In Dombivli', 'Properties In Borivali'],
    },
    {
      heading: 'Residential Properties',
      items: ['Villa', 'Office Space', 'Shop & Showroom', 'Warehouse & Industrial Shed', 'Plots'],
    },
    {
      heading: 'Residential Properties In Andheri',
      items: ['1 BHK In Andheri', '2 BHK In Andheri', '3 BHK In Andheri'],
    },
  ] as FooterLocationGroup[],
  copyright: 'All rights are reserved | Copyright © 2026 PropfyndX | Regenti InfoTech Pvt. Ltd.',
  poweredBy: 'POWERED BY BRANDNITI5',
};

export interface PropertyDetail {
  slug: string;
  name: string;
  developer?: string;
  location: string;
  type?: string;
  configurations: string;
  cardConfig: string;
  price: string;
  cardPrice: string;
  rera?: string;
  amenities?: string[];
  photo: string;
  photoAlt: string;
  mapQuery: string;
}

export const PROPERTIES: PropertyDetail[] = [
  {
    slug: 'aaradhya-avaan',
    name: 'Aaradhya Avaan',
    developer: 'MICL Group',
    location: 'Grant Road, Mumbai',
    type: 'Residential',
    configurations: '3BHK, 4BHK, 5BHK Sq. Ft.',
    cardConfig: '3BHK | 4BHK | 5BHK',
    price: '₹ 8.51 Cr',
    cardPrice: '₹ 8.51 Cr*',
    rera: 'P51900048675',
    amenities: [
      'Gymnasium',
      'Swimming Pool',
      'Kids Play Area',
      'Security',
      'High Speed Elevator',
      'Parking',
      'Garden',
      'Outdoor Games',
      'Indoor Games',
      'Yoga',
    ],
    photo: '/assets/photos/mumbai-aaradhya-avaan.jpg',
    photoAlt: 'Aaradhya Avaan luxury residential tower in South Mumbai at golden hour',
    mapQuery: 'Aaradhya Avaan Experience Centre, Grant Road, Mumbai',
  },
  {
    slug: 'truspace-prima-altiora',
    name: 'Truspace Prima Altiora',
    location: 'Wakad, Mumbai',
    configurations: '2BHK, 3BHK',
    cardConfig: '2BHK | 3BHK',
    price: '₹ 97.5 Lac(s)',
    cardPrice: '₹ 97.5 Lac(s)*',
    rera: 'PR1260002602057',
    photo: '/assets/photos/mumbai-truspace-prima-altiora.jpg',
    photoAlt: 'Truspace Prima Altiora modern residential tower with balconies and greenery',
    mapQuery: 'Truspace Prima Altiora, Wakad, Mumbai',
  },
  {
    slug: 'alora',
    name: 'Alora',
    location: 'Santacruz East, Mumbai',
    configurations: '2BHK, 3BHK',
    cardConfig: '2BHK | 3BHK',
    price: '₹ 2.69 Cr',
    cardPrice: '₹ 2.69 Cr*',
    rera: 'P51800049048',
    photo: '/assets/photos/mumbai-alora.jpg',
    photoAlt: 'Alora contemporary apartment building at dusk with lit windows and landscaped entrance',
    mapQuery: 'Alora, Santacruz East, Mumbai',
  },
  {
    slug: 'karl-lagerfeld-villas',
    name: 'Karl Lagerfeld Villas',
    location: 'District 11, MBR City, Dubai',
    configurations: '6BHK',
    cardConfig: '6BHK',
    price: 'Price On Request',
    cardPrice: 'Price On Request',
    photo: '/assets/photos/dubai-karl-lagerfeld-villas.jpg',
    photoAlt: 'Karl Lagerfeld Villas ultra-luxury modern white and black villa in Dubai',
    mapQuery: 'Karl Lagerfeld Villas, District 11, MBR City, Dubai',
  },
  {
    slug: 'standalone-villa',
    name: 'Standalone Villa',
    location: 'Dubailand, Dubai',
    configurations: '4BHK',
    cardConfig: '4BHK',
    price: 'Price On Request',
    cardPrice: 'Price On Request',
    photo: '/assets/photos/dubai-standalone-villa.jpg',
    photoAlt: 'Standalone modern villa with palm tree garden in Dubailand, Dubai',
    mapQuery: 'Standalone Villa, Dubailand, Dubai',
  },
  {
    slug: 'luxury-villa',
    name: 'Luxury Villa',
    location: 'The Valley, Dubai',
    configurations: '4BHK',
    cardConfig: '4BHK',
    price: 'Price On Request',
    cardPrice: 'Price On Request',
    photo: '/assets/photos/dubai-luxury-villa.jpg',
    photoAlt: 'Large luxury villa with swimming pool at sunset in The Valley, Dubai',
    mapQuery: 'Luxury Villa, The Valley, Dubai',
  },
  {
    slug: 'aplite-sapphire',
    name: 'Aplite Sapphire',
    location: 'Grant Road, Mumbai',
    configurations: '1BHK, 2BHK, 3BHK',
    cardConfig: '1BHK | 2BHK | 3BHK',
    price: 'Price On Request',
    cardPrice: 'Price On Request',
    rera: 'P51900078543',
    photo: '/assets/photos/mumbai-aplite-sapphire.jpg',
    photoAlt: 'Aplite Sapphire modern high-rise residential tower seen from above at dusk with lights on',
    mapQuery: 'Aplite Sapphire, Grant Road, Mumbai',
  },
];

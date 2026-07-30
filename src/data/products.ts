export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductDetail {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  basePrice: number;
  moq: number;
  productionTimeMin: number;
  productionTimeMax: number;
  shippingTimeMin: number;
  shippingTimeMax: number;
  foodSafeAvailable: boolean;
  ecoFriendlyAvailable: boolean;
  customSizeAllowed: boolean;
  availableMaterials: string[];
  availableFinishes: string[];
  availableSizes: {
    label: string;
    length: number;
    width: number;
    height: number;
    unit: string;
    printWidth: number;
    printHeight: number;
  }[];
  useCases: string[];
  industries: string[];
  artworkGuidelines: string[];
  faq: FAQItem[];
  seoTitle: string;
  seoDescription: string;
}

export const productsData: Record<string, ProductDetail> = {
  // Custom Boxes Category
  'mailer-boxes': {
    name: 'Custom Mailer Boxes',
    slug: 'mailer-boxes',
    category: 'boxes',
    shortDescription: 'Premium printed corrugated mailer boxes designed for e-commerce unboxing, subscription boxes, and retail packaging.',
    longDescription: 'Our mailer boxes are constructed from durable, high-density corrugated cardboard to protect your products during transit while displaying your brand in vivid detail. Perfect for e-commerce shippers looking to deliver an unforgettable unboxing experience. Fully customizable with options for double-sided printing, custom dielines, and sustainable kraft board options.',
    basePrice: 45,
    moq: 50,
    productionTimeMin: 7,
    productionTimeMax: 10,
    shippingTimeMin: 3,
    shippingTimeMax: 5,
    foodSafeAvailable: false,
    ecoFriendlyAvailable: true,
    customSizeAllowed: true,
    availableMaterials: ['kraft', 'whiteCardboard', 'corrugated'],
    availableFinishes: ['Matte', 'Gloss', 'Soft-touch', 'Spot UV', 'Foil Stamping'],
    availableSizes: [
      { label: 'Small Box', length: 15, width: 15, height: 5, unit: 'cm', printWidth: 14, printHeight: 14 },
      { label: 'Medium Box', length: 25, width: 20, height: 8, unit: 'cm', printWidth: 24, printHeight: 19 },
      { label: 'Large Box', length: 35, width: 25, height: 12, unit: 'cm', printWidth: 34, printHeight: 24 }
    ],
    useCases: [
      'Subscription boxes',
      'E-commerce shipping packages',
      'Brand gift packaging sets',
      'Retail display packaging'
    ],
    industries: ['d2c-brands', 'cosmetics', 'clothing', 'corporate-gifting'],
    artworkGuidelines: [
      'Submit files in vector format (AI, PDF, SVG, or EPS).',
      'Minimum resolution for raster image attachments is 300 DPI.',
      'Allow a 3mm bleed margin around the dieline cut lines.',
      'Ensure all text fonts are converted to outlines.'
    ],
    faq: [
      { question: 'Are these boxes strong enough for shipping?', answer: 'Yes, our corrugated mailer boxes are designed specifically to withstand shipping stresses and do not require outer envelopes.' },
      { question: 'Can I print on both the inside and outside of the box?', answer: 'Absolutely! We offer double-sided printing options during quote specification.' }
    ],
    seoTitle: 'Custom Corrugated Mailer Boxes | BrandPack Studio',
    seoDescription: 'Design custom mailer boxes for your subscription or e-commerce brand. Real-time 3D preview, eco-friendly corrugated cardboard, and bulk quote support.'
  },
  'pizza-boxes': {
    name: 'Custom Pizza Boxes',
    slug: 'pizza-boxes',
    category: 'boxes',
    shortDescription: 'Food-safe corrugated pizza packaging that keeps meals hot, crispy, and professionally branded.',
    longDescription: 'High-quality food-safe pizza boxes featuring heat vents, grease-barrier coatings, and durable clay-coated liners. Available in natural kraft or clean bleached white options with full outer prints to keep your pizzeria or cloud kitchen top of mind.',
    basePrice: 18,
    moq: 100,
    productionTimeMin: 6,
    productionTimeMax: 9,
    shippingTimeMin: 2,
    shippingTimeMax: 4,
    foodSafeAvailable: true,
    ecoFriendlyAvailable: true,
    customSizeAllowed: true,
    availableMaterials: ['kraft', 'whiteCardboard', 'corrugated'],
    availableFinishes: ['Matte', 'No Finish'],
    availableSizes: [
      { label: '7 inch', length: 18, width: 18, height: 4, unit: 'cm', printWidth: 17, printHeight: 17 },
      { label: '10 inch', length: 26, width: 26, height: 4.5, unit: 'cm', printWidth: 25, printHeight: 25 },
      { label: '12 inch', length: 31, width: 31, height: 4.5, unit: 'cm', printWidth: 30, printHeight: 30 }
    ],
    useCases: [
      'Takeaway pizzerias',
      'Cloud kitchen operations',
      'Gourmet flatbread packaging'
    ],
    industries: ['restaurants', 'cloud-kitchens'],
    artworkGuidelines: [
      'Vector format files preferred.',
      'Ensure grease coatings are considered when preparing heavy ink designs.'
    ],
    faq: [
      { question: 'Do these boxes have steam vents?', answer: 'Yes, steam escape vents are included by default to prevent pizzas from becoming soggy.' }
    ],
    seoTitle: 'Branded Custom Pizza Boxes | BrandPack Studio',
    seoDescription: 'Order food-safe corrugated custom pizza boxes for your restaurant or cloud kitchen. Low MOQs, fast delivery, and bulk quotes.'
  },

  // Custom Carry Bags Category
  'kraft-paper-bags': {
    name: 'Custom Kraft Paper Bags',
    slug: 'kraft-paper-bags',
    category: 'bags',
    shortDescription: 'Eco-friendly paper carry bags with reinforced handles, designed for takeaway and premium retail handoffs.',
    longDescription: 'Durable, sustainable kraft paper carry bags available in natural brown and clean bleached white styles. Standard options include twisted rope handles, flat-strap paper handles, and luxury ribbon handles. Bottom-reinforced gussets provide exceptional weight limits.',
    basePrice: 12,
    moq: 100,
    productionTimeMin: 5,
    productionTimeMax: 8,
    shippingTimeMin: 3,
    shippingTimeMax: 5,
    foodSafeAvailable: true,
    ecoFriendlyAvailable: true,
    customSizeAllowed: false,
    availableMaterials: ['kraft', 'whiteCardboard', 'recycledPaper'],
    availableFinishes: ['Matte', 'Gloss'],
    availableSizes: [
      { label: 'Small Takeaway', length: 20, width: 12, height: 25, unit: 'cm', printWidth: 18, printHeight: 20 },
      { label: 'Medium Retail', length: 28, width: 15, height: 32, unit: 'cm', printWidth: 26, printHeight: 26 },
      { label: 'Large Catering', length: 32, width: 22, height: 38, unit: 'cm', printWidth: 30, printHeight: 32 }
    ],
    useCases: [
      'Takeaway restaurant delivery bags',
      'Cafe and bakery customer carryouts',
      'Clothing and fashion retail boutique bags',
      'Event and gifting handouts'
    ],
    industries: ['restaurants', 'cafes', 'bakeries', 'clothing', 'corporate-gifting'],
    artworkGuidelines: [
      'Keep logo elements within the printable safe zone.',
      'Select handles that contrast or match your printed artwork.'
    ],
    faq: [
      { question: 'Are these bags recyclable?', answer: 'Yes! They are made from 100% recyclable materials and compostable paper fibers.' }
    ],
    seoTitle: 'Custom Printed Kraft Paper Bags | BrandPack Studio',
    seoDescription: 'Premium custom printed paper carry bags for boutiques, restaurants, cafes, and bakeries. Eco-friendly, strong handles.'
  },

  // Food Packaging Category
  'custom-food-boxes': {
    name: 'Custom Food Boxes',
    slug: 'custom-food-boxes',
    category: 'food-packaging',
    shortDescription: 'Grease-resistant takeaway meal packaging with certified food-safe coatings.',
    longDescription: 'Our signature food-grade takeaway boxes are built to hold hot, wet, and greasy foods securely without leakage or tearing. They utilize food-safe, plant-based water coatings instead of conventional plastic laminates, making them fully compostable and biodegradable.',
    basePrice: 14,
    moq: 200,
    productionTimeMin: 8,
    productionTimeMax: 12,
    shippingTimeMin: 4,
    shippingTimeMax: 6,
    foodSafeAvailable: true,
    ecoFriendlyAvailable: true,
    customSizeAllowed: true,
    availableMaterials: ['foodSafe', 'kraft'],
    availableFinishes: ['Matte', 'No Finish'],
    availableSizes: [
      { label: 'Single Burger Box', length: 11, width: 11, height: 8, unit: 'cm', printWidth: 10, printHeight: 7 },
      { label: 'Medium Meal Box', length: 18, width: 12, height: 6.5, unit: 'cm', printWidth: 17, printHeight: 5.5 },
      { label: 'Large Compartment Box', length: 24, width: 16, height: 7, unit: 'cm', printWidth: 23, printHeight: 6 }
    ],
    useCases: [
      'Burger delivery packages',
      'Combo meal portions',
      'Bakery cake slices or donut assortments'
    ],
    industries: ['restaurants', 'cloud-kitchens', 'bakeries', 'cafes'],
    artworkGuidelines: [
      'Avoid placing heavy ink coats in zones that interface directly with food.',
      'Check bleed settings on all tab folding areas.'
    ],
    faq: [
      { question: 'Are these boxes microwave safe?', answer: 'Yes! The materials and food-safe barrier coatings are fully microwaveable.' }
    ],
    seoTitle: 'Custom Takaway Food Boxes | BrandPack Studio',
    seoDescription: 'Explore biodegradable custom food packaging boxes. Grease resistant, food-safe coatings for restaurants and cloud kitchens.'
  },

  // Cutlery Sleeves Category
  'cutlery-sleeves': {
    name: 'Branded Cutlery Sleeves',
    slug: 'cutlery-sleeves',
    category: 'cutlery-sleeves',
    shortDescription: 'Hygienic tableware sleeves featuring custom print, napkin pockets, and QR code integration.',
    longDescription: 'Ensure cutlery remains clean and secure during takeaway delivery or dine-in seating. These paper sleeves fit standard utensils (forks, knives, spoons) and can include pockets for branded napkins. Excellent canvas for adding a QR code redirecting customers to menus or feedback links.',
    basePrice: 4,
    moq: 500,
    productionTimeMin: 5,
    productionTimeMax: 7,
    shippingTimeMin: 2,
    shippingTimeMax: 4,
    foodSafeAvailable: true,
    ecoFriendlyAvailable: true,
    customSizeAllowed: false,
    availableMaterials: ['kraft', 'recycledPaper', 'whiteCardboard'],
    availableFinishes: ['Matte', 'No Finish'],
    availableSizes: [
      { label: 'Standard Sleeve', length: 7, width: 22, height: 0.1, unit: 'cm', printWidth: 6.5, printHeight: 21 },
      { label: 'Cutlery Pouch', length: 9, width: 20, height: 0.2, unit: 'cm', printWidth: 8.5, printHeight: 19.5 }
    ],
    useCases: [
      'Takeaway cutlery bundles',
      'Dine-in cafe tableware setup',
      'Events and catering hospitality'
    ],
    industries: ['restaurants', 'cloud-kitchens', 'cafes'],
    artworkGuidelines: [
      'Incorporate a QR code for menu or review page redirects.',
      'Outline text down to 6pt minimum sizes.'
    ],
    faq: [
      { question: 'Do these include cutlery?', answer: 'No, these are custom printed sleeves only. Cutlery must be purchased separately.' }
    ],
    seoTitle: 'Custom Cutlery Sleeves & Table Accessories | BrandPack Studio',
    seoDescription: 'Upgrade restaurant cutlery hygiene with branded paper sleeves. Free design templates, low wholesale prices.'
  },

  // Labels & Stickers Category
  'printed-stickers': {
    name: 'Printed Stickers & Labels',
    slug: 'printed-stickers',
    category: 'labels-stickers',
    shortDescription: 'Custom die-cut labels, packaging seal tapes, and stickers for versatile brand accenting.',
    longDescription: 'Add a professional brand touch to simple boxes, paper wraps, takeaway bags, or cups. Available in waterproof vinyl, textured paper, and clear materials. Choose between sheets or roll formats for easy manual application or automated labeling machines.',
    basePrice: 2,
    moq: 100,
    productionTimeMin: 4,
    productionTimeMax: 6,
    shippingTimeMin: 2,
    shippingTimeMax: 3,
    foodSafeAvailable: false,
    ecoFriendlyAvailable: true,
    customSizeAllowed: true,
    availableMaterials: ['glossLaminated', 'whiteCardboard', 'recycledPaper'],
    availableFinishes: ['Gloss', 'Matte', 'Spot UV', 'Foil Stamping'],
    availableSizes: [
      { label: 'Small Circle', length: 4, width: 4, height: 0.01, unit: 'cm', printWidth: 3.8, printHeight: 3.8 },
      { label: 'Medium Square', length: 6, width: 6, height: 0.01, unit: 'cm', printWidth: 5.8, printHeight: 5.8 },
      { label: 'Rectangle Seal', length: 12, width: 4, height: 0.01, unit: 'cm', printWidth: 11.6, printHeight: 3.6 }
    ],
    useCases: [
      'Packaging seals for boxes or bags',
      'Bottle and jar product labeling',
      'Promotional giveaways and brand swag'
    ],
    industries: ['restaurants', 'cloud-kitchens', 'cosmetics', 'bakeries', 'd2c-brands', 'clothing'],
    artworkGuidelines: [
      'Provide clean contour cut paths in vector layers.',
      'Text must be outlining to prevent rendering modifications.'
    ],
    faq: [
      { question: 'Are these stickers waterproof?', answer: 'Yes, if you select our vinyl base material option, it is completely waterproof and oil-resistant.' }
    ],
    seoTitle: 'Custom Packaging Stickers & Labels | BrandPack Studio',
    seoDescription: 'Design waterproof vinyl stickers, thank-you labels, and bag seals. High-gloss or matte coatings available.'
  }
};

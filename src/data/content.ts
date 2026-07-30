// ============================================================
// BrandPack Studio – Product & Content Data
// ============================================================

// --------------------------------------------------
// Categories
// --------------------------------------------------
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  materialBadge: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 'boxes',
    name: 'Custom Boxes',
    slug: 'boxes',
    description: 'Mailer, food, bakery, shipping, gift, and rigid boxes with branded print.',
    materialBadge: 'Kraft / White / Corrugated',
    icon: '📦',
    productCount: 13,
  },
  {
    id: 'bags',
    name: 'Custom Bags',
    slug: 'bags',
    description: 'Paper carry bags for restaurants, retail stores, bakeries, and boutiques.',
    materialBadge: 'Kraft / White / Luxury',
    icon: '🛍️',
    productCount: 9,
  },
  {
    id: 'food-packaging',
    name: 'Food Packaging',
    slug: 'food-packaging',
    description: 'Food-safe boxes, wraps, tray liners, and cup sleeves for delivery & dine-in.',
    materialBadge: 'Food-Grade / Kraft',
    icon: '🍔',
    productCount: 8,
  },
  {
    id: 'cutlery-sleeves',
    name: 'Cutlery Sleeves',
    slug: 'cutlery-sleeves',
    description: 'Branded cutlery pouches, napkin sleeves, and restaurant table accessories.',
    materialBadge: 'Food-Safe / Recycled',
    icon: '🍴',
    productCount: 7,
  },
  {
    id: 'labels-stickers',
    name: 'Labels & Stickers',
    slug: 'labels-stickers',
    description: 'Custom labels, QR-code stickers, thank-you stickers, and product labels.',
    materialBadge: 'Vinyl / Paper / Clear',
    icon: '🏷️',
    productCount: 6,
  },
  {
    id: 'sleeves-wraps',
    name: 'Sleeves & Wraps',
    slug: 'sleeves-wraps',
    description: 'Packaging sleeves, belly bands, and food wraps for a finished brand look.',
    materialBadge: 'Kraft / Art Card',
    icon: '📜',
    productCount: 5,
  },
  {
    id: 'tissue-tape',
    name: 'Tissue & Tape',
    slug: 'tissue-tape',
    description: 'Branded tissue paper, wrapping paper, and printed packaging tape.',
    materialBadge: 'Tissue / BOPP',
    icon: '🎀',
    productCount: 4,
  },
  {
    id: 'brand-kits',
    name: 'Brand Kits',
    slug: 'brand-kits',
    description: 'Complete packaging bundles with boxes, bags, stickers, tissue, and inserts.',
    materialBadge: 'Mixed Materials',
    icon: '🎁',
    productCount: 3,
  },
];

// --------------------------------------------------
// Best Sellers
// --------------------------------------------------
export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  bestFor: string;
  materials: string;
  moq: string;
  description: string;
  features: string[];
  isEco?: boolean;
  isBestSeller?: boolean;
}

export const bestSellers: Product[] = [
  {
    id: 'kraft-paper-bags',
    name: 'Kraft Paper Bags',
    slug: 'kraft-paper-bags',
    category: 'bags',
    bestFor: 'Restaurants, cafes, bakeries, boutiques',
    materials: 'Kraft / White / Luxury matte',
    moq: 'From 100 units',
    description: 'Premium printed kraft paper bags with twisted or die-cut handles.',
    features: ['Twisted rope handles', 'Reinforced base', 'Full-color print', 'Eco-friendly'],
  },
  {
    id: 'custom-mailer-boxes',
    name: 'Custom Mailer Boxes',
    slug: 'custom-mailer-boxes',
    category: 'boxes',
    bestFor: 'E-commerce, D2C brands, subscription boxes',
    materials: 'Corrugated / White / Kraft',
    moq: 'From 50 units',
    description: 'Branded mailer boxes with inside/outside printing for premium unboxing.',
    features: ['Inside printing', 'Auto-lock bottom', 'Custom sizes', 'Sturdy corrugated'],
  },
  {
    id: 'custom-food-boxes',
    name: 'Custom Food Boxes',
    slug: 'custom-food-boxes',
    category: 'food-packaging',
    bestFor: 'Restaurants, cloud kitchens, catering',
    materials: 'Food-grade / Kraft / White',
    moq: 'From 200 units',
    description: 'Food-safe branded boxes for burgers, meals, bakery items, and snacks.',
    features: ['Food-safe coating', 'Grease resistant', 'Microwave safe options', 'Custom sizes'],
  },
  {
    id: 'cutlery-sleeves',
    name: 'Cutlery Sleeves',
    slug: 'cutlery-sleeves',
    category: 'cutlery-sleeves',
    bestFor: 'Restaurants, cloud kitchens, catering, events',
    materials: 'Kraft / Art card / Recycled',
    moq: 'From 500 units',
    description: 'Branded cutlery sleeves for hygienic food-service presentation.',
    features: ['QR code printing', 'Multiple sizes', 'Eco options', 'Food-safe'],
  },
  {
    id: 'printed-stickers',
    name: 'Printed Stickers',
    slug: 'printed-stickers',
    category: 'labels-stickers',
    bestFor: 'All brands, packaging seals, thank-you notes',
    materials: 'Vinyl / Paper / Clear / Holographic',
    moq: 'From 100 units',
    description: 'Custom die-cut stickers and labels for branding and packaging.',
    features: ['Die-cut shapes', 'Roll or sheet', 'Waterproof options', 'Matte or gloss'],
  },
  {
    id: 'cup-sleeves',
    name: 'Cup Sleeves',
    slug: 'cup-sleeves',
    category: 'food-packaging',
    bestFor: 'Cafes, coffee shops, juice bars',
    materials: 'Kraft / White / Corrugated',
    moq: 'From 500 units',
    description: 'Branded cup sleeves for hot and cold beverages.',
    features: ['Heat insulating', 'Full wrap print', 'Multiple sizes', 'Eco kraft'],
  },
];

// --------------------------------------------------
// Industries
// --------------------------------------------------
export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: string[];
  icon: string;
}

export const industries: Industry[] = [
  {
    id: 'restaurants',
    name: 'Restaurants',
    slug: 'restaurant-packaging',
    description: 'Complete branded packaging for dine-in, takeaway, and delivery.',
    products: ['Food boxes', 'Cutlery sleeves', 'Paper bags', 'Napkins', 'Tray liners', 'Stickers'],
    icon: '🍽️',
  },
  {
    id: 'cloud-kitchens',
    name: 'Cloud Kitchens',
    slug: 'cloud-kitchen-packaging',
    description: 'Delivery-focused packaging that builds brand recall without a storefront.',
    products: ['Meal boxes', 'Paper bags', 'Cutlery sleeves', 'Stickers', 'Food wraps'],
    icon: '☁️',
  },
  {
    id: 'bakeries',
    name: 'Bakeries',
    slug: 'bakery-packaging',
    description: 'Beautiful packaging for cakes, pastries, breads, and gifting.',
    products: ['Cake boxes', 'Bakery bags', 'Tissue paper', 'Labels', 'Gift boxes'],
    icon: '🧁',
  },
  {
    id: 'cafes',
    name: 'Cafes',
    slug: 'cafe-packaging',
    description: 'Branded cups, sleeves, bags, and accessories for the perfect cafe experience.',
    products: ['Cup sleeves', 'Paper bags', 'Napkins', 'Coasters', 'Stickers'],
    icon: '☕',
  },
  {
    id: 'd2c-brands',
    name: 'D2C Brands',
    slug: 'ecommerce-packaging',
    description: 'Premium unboxing experiences that make your e-commerce brand unforgettable.',
    products: ['Mailer boxes', 'Tissue paper', 'Stickers', 'Thank-you cards', 'Tape'],
    icon: '📱',
  },
  {
    id: 'cosmetics',
    name: 'Cosmetics',
    slug: 'cosmetic-packaging',
    description: 'Luxury packaging for beauty products, skincare, and wellness brands.',
    products: ['Rigid boxes', 'Product boxes', 'Labels', 'Inserts', 'Tissue paper'],
    icon: '💄',
  },
  {
    id: 'clothing',
    name: 'Clothing Brands',
    slug: 'clothing-packaging',
    description: 'Branded packaging for fashion, apparel, and accessories.',
    products: ['Shopping bags', 'Tissue paper', 'Hang tags', 'Stickers', 'Mailer boxes'],
    icon: '👕',
  },
  {
    id: 'corporate-gifting',
    name: 'Corporate Gifting',
    slug: 'corporate-gift-packaging',
    description: 'Premium gift packaging for corporate events, client gifts, and festivals.',
    products: ['Rigid gift boxes', 'Bags', 'Tissue paper', 'Inserts', 'Custom tape'],
    icon: '🎁',
  },
];

// --------------------------------------------------
// Materials
// --------------------------------------------------
export interface Material {
  id: string;
  name: string;
  bestFor: string;
  foodSafe: boolean;
  ecoFriendly: boolean;
  finishCompatibility: string[];
  premiumLevel: 'Standard' | 'Premium' | 'Luxury';
  color: string;
}

export const materials: Material[] = [
  {
    id: 'kraft',
    name: 'Kraft Paper',
    bestFor: 'Eco bags, food boxes, sleeves, wraps, delivery packaging',
    foodSafe: true,
    ecoFriendly: true,
    finishCompatibility: ['Matte', 'Gloss', 'Spot UV', 'Foil stamping'],
    premiumLevel: 'Standard',
    color: '#B9824B',
  },
  {
    id: 'white-cardboard',
    name: 'White Cardboard',
    bestFor: 'Clean premium boxes, product packaging, retail packaging',
    foodSafe: true,
    ecoFriendly: false,
    finishCompatibility: ['Matte', 'Gloss', 'Soft-touch', 'Spot UV', 'Foil', 'Embossing'],
    premiumLevel: 'Premium',
    color: '#FAFAFA',
  },
  {
    id: 'corrugated',
    name: 'Corrugated Board',
    bestFor: 'Shipping boxes, mailer boxes, heavy-duty packaging',
    foodSafe: false,
    ecoFriendly: true,
    finishCompatibility: ['Matte', 'Gloss'],
    premiumLevel: 'Standard',
    color: '#C4A67D',
  },
  {
    id: 'food-grade',
    name: 'Food-Grade Coated Paper',
    bestFor: 'Burger boxes, meal boxes, wraps, cup sleeves, tray liners',
    foodSafe: true,
    ecoFriendly: false,
    finishCompatibility: ['Matte', 'Satin'],
    premiumLevel: 'Standard',
    color: '#F5F0E8',
  },
  {
    id: 'recycled',
    name: 'Recycled Paper',
    bestFor: 'Eco-conscious brands, sustainable packaging, kraft alternatives',
    foodSafe: false,
    ecoFriendly: true,
    finishCompatibility: ['Matte', 'Spot UV'],
    premiumLevel: 'Standard',
    color: '#D4C5A9',
  },
  {
    id: 'luxury-rigid',
    name: 'Luxury Rigid Board',
    bestFor: 'Gift boxes, luxury products, corporate gifting, premium retail',
    foodSafe: false,
    ecoFriendly: false,
    finishCompatibility: ['Soft-touch', 'Spot UV', 'Foil stamping', 'Embossing', 'Debossing'],
    premiumLevel: 'Luxury',
    color: '#111827',
  },
];

// --------------------------------------------------
// Testimonials
// --------------------------------------------------
export interface Testimonial {
  id: string;
  customerName: string;
  companyName: string;
  industry: string;
  productOrdered: string;
  review: string;
  rating: number;
  result: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    customerName: 'Priya Sharma',
    companyName: 'Spice Route Kitchen',
    industry: 'Restaurant',
    productOrdered: 'Food Boxes & Cutlery Sleeves',
    review: 'The branded food boxes and cutlery sleeves made our delivery orders look much more premium. The quote process was clear and the artwork review helped us avoid print mistakes.',
    rating: 5,
    result: '40% increase in repeat delivery orders',
  },
  {
    id: '2',
    customerName: 'Ankit Mehta',
    companyName: 'The Sugar Studio',
    industry: 'Bakery',
    productOrdered: 'Cake Boxes & Paper Bags',
    review: 'Our custom cake boxes and paper bags helped us create a consistent brand experience from store pickup to gifting. Customers now recognize our packaging instantly.',
    rating: 5,
    result: 'Brand recognition increased significantly',
  },
  {
    id: '3',
    customerName: 'Riya Kapoor',
    companyName: 'Glow Naturals',
    industry: 'D2C Brand',
    productOrdered: 'Mailer Boxes & Stickers',
    review: 'The 3D preview helped us understand how our logo would look before production. Reordering was simple and the quality was consistent across batches.',
    rating: 5,
    result: 'Premium unboxing experience for customers',
  },
  {
    id: '4',
    customerName: 'Vikram Patel',
    companyName: 'Brew & Bean',
    industry: 'Cafe',
    productOrdered: 'Cup Sleeves & Paper Bags',
    review: 'Our branded cup sleeves became a talking point among customers. The eco-friendly material options aligned perfectly with our sustainability values.',
    rating: 5,
    result: 'Customers share packaging on social media',
  },
  {
    id: '5',
    customerName: 'Neha Gupta',
    companyName: 'StyleBox',
    industry: 'E-commerce',
    productOrdered: 'Mailer Boxes, Tissue Paper & Thank-you Cards',
    review: 'The complete brand kit transformed our unboxing experience. Our return customers increased after we upgraded our packaging. The design team was incredibly helpful.',
    rating: 5,
    result: '25% increase in customer retention',
  },
];

// --------------------------------------------------
// FAQs
// --------------------------------------------------
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'moq',
    question: 'What is the minimum order quantity?',
    answer: 'MOQ depends on the product, material, size, and print method. Some products support low MOQ starting from 50 units, while bulk pricing improves significantly at higher quantities. Use our quote builder for exact MOQ details.',
  },
  {
    id: 'design-support',
    question: 'Can you help with packaging design?',
    answer: 'Yes! You can upload a logo or reference artwork, and our design team can help prepare print-ready files, dielines, and proof checks. We also offer a 3D design studio where you can preview your packaging before production.',
  },
  {
    id: 'food-safe',
    question: 'Do you offer food-safe packaging?',
    answer: 'Yes. Food boxes, cutlery sleeves, tray liners, wraps, cup sleeves, and restaurant packaging can be produced with food-safe material options including grease-resistant and microwave-safe coatings where applicable.',
  },
  {
    id: 'delivery-time',
    question: 'How long does production and delivery take?',
    answer: 'Timelines depend on product type, quantity, artwork approval, and delivery location. Standard production is 7-15 business days after artwork approval, with express options available. The quote builder shows an estimated timeline before submission.',
  },
  {
    id: 'bulk-pricing',
    question: 'Do you offer bulk pricing?',
    answer: 'Yes. Bulk pricing is calculated based on product type, size, material, print colors, finish, quantity, and delivery zone. Higher quantities unlock better per-unit pricing. Request a quote for detailed pricing.',
  },
  {
    id: 'artwork-format',
    question: 'What artwork formats do you accept?',
    answer: 'Preferred formats include AI, PDF, SVG, EPS, and high-resolution PNG (300 DPI minimum). Vector files are recommended for best print quality. Our team can also help convert your files if needed.',
  },
  {
    id: 'samples',
    question: 'Can I order a sample before bulk production?',
    answer: 'Yes. You can order a sample kit that includes material swatches, finish samples, and product samples. You can also request product-specific samples with your branding before placing a bulk order.',
  },
  {
    id: 'reorders',
    question: 'Can I reorder the same packaging later?',
    answer: 'Absolutely. Your account stores saved designs, quote history, and previous orders for quick reordering. Simply log in, find your previous order, and reorder with one click — same quality, same specifications.',
  },
];

// --------------------------------------------------
// How It Works Steps
// --------------------------------------------------
export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const howItWorksSteps: Step[] = [
  {
    id: 1,
    title: 'Choose Product',
    description: 'Browse our catalog and select the packaging type that fits your brand.',
    icon: '🎯',
  },
  {
    id: 2,
    title: 'Select Size & Material',
    description: 'Pick from standard sizes or enter custom dimensions. Choose your material.',
    icon: '📐',
  },
  {
    id: 3,
    title: 'Upload Artwork',
    description: 'Upload your logo, full artwork, or let our design team help you create one.',
    icon: '🎨',
  },
  {
    id: 4,
    title: 'Preview in 3D',
    description: 'See your branding on the packaging in our interactive 3D design studio.',
    icon: '🔮',
  },
  {
    id: 5,
    title: 'Request Quote',
    description: 'Get transparent pricing based on your specifications and quantity.',
    icon: '💰',
  },
  {
    id: 6,
    title: 'Approve Proof',
    description: 'Review the print proof, request changes if needed, and approve for production.',
    icon: '✅',
  },
  {
    id: 7,
    title: 'Receive Packaging',
    description: 'Your custom packaging is produced, quality-checked, and delivered to your door.',
    icon: '📦',
  },
];

// --------------------------------------------------
// Trust Badges
// --------------------------------------------------
export interface TrustBadge {
  id: string;
  label: string;
  icon: string;
}

export const trustBadges: TrustBadge[] = [
  { id: 'low-moq', label: 'Low MOQ Available', icon: '📉' },
  { id: 'food-safe', label: 'Food-Safe Materials', icon: '🛡️' },
  { id: 'eco', label: 'Eco-Friendly Options', icon: '🌿' },
  { id: 'shipping', label: 'Pan-India & Global Shipping', icon: '🌍' },
  { id: 'bulk', label: 'Bulk Pricing Support', icon: '💎' },
  { id: 'artwork', label: 'Artwork Assistance', icon: '🎨' },
];

import type { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 901,
    title: 'HIIT THERMAL PRO LONG SLEEVE',
    type: 'Long Sleeve',
    price: 88,
    compareAtPrice: 110,
    available: true,
    featuredImage: '/images/product-1.jpg',
    images: ['/images/product-1.jpg', '/images/editorial-running.jpg'],
    badge: 'NEW ARRIVAL',
    description:
      'Designed for high-output cold-weather training. Micro-grid thermal interior provides superior insulation while micro-perforated underarm panels vent excess heat. Finished with thumbholes and discreet watch opening.',
    fabricDetails:
      '78% Recycled Polyamide, 22% Elastane. 4-way stretch moisture management with anti-odor antimicrobial yarn and 360-degree reflective accents.',
    colors: ['Obsidian Black', 'Misty Pine', 'Slate'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: [
      { id: 90101, title: 'Obsidian Black / S', price: 88, compareAtPrice: 110, available: true, color: 'Obsidian Black', size: 'S' },
      { id: 90102, title: 'Obsidian Black / M', price: 88, compareAtPrice: 110, available: true, color: 'Obsidian Black', size: 'M' },
      { id: 90103, title: 'Obsidian Black / L', price: 88, compareAtPrice: 110, available: true, color: 'Obsidian Black', size: 'L' },
      { id: 90104, title: 'Obsidian Black / XL', price: 88, compareAtPrice: 110, available: true, color: 'Obsidian Black', size: 'XL' },
      { id: 90105, title: 'Obsidian Black / XXL', price: 88, compareAtPrice: 110, available: false, color: 'Obsidian Black', size: 'XXL' },
      { id: 90106, title: 'Misty Pine / M', price: 88, compareAtPrice: 110, available: true, color: 'Misty Pine', size: 'M' },
      { id: 90107, title: 'Misty Pine / L', price: 88, compareAtPrice: 110, available: true, color: 'Misty Pine', size: 'L' },
    ],
  },
  {
    id: 902,
    title: 'HIIT SHIELD WINDSHELL JACKET',
    type: 'Outerwear',
    price: 135,
    compareAtPrice: 155,
    available: true,
    featuredImage: '/images/product-2.jpg',
    images: ['/images/product-2.jpg', '/images/hero-running.jpg'],
    badge: 'BESTSELLER',
    description:
      'Featherlight weather barrier constructed from Japanese micro-ripstop. Blocks icy headwinds while venting heat through zoned back exhausts. Packs into its collar pocket for minimal footprint.',
    fabricDetails:
      '100% Recycled Nylon Ripstop with eco-friendly PFC-free DWR coating. Ultra-compact packable design weighing just 112 grams.',
    colors: ['Bone White', 'Blackout', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: [
      { id: 90201, title: 'Bone White / S', price: 135, compareAtPrice: 155, available: true, color: 'Bone White', size: 'S' },
      { id: 90202, title: 'Bone White / M', price: 135, compareAtPrice: 155, available: true, color: 'Bone White', size: 'M' },
      { id: 90203, title: 'Bone White / L', price: 135, compareAtPrice: 155, available: true, color: 'Bone White', size: 'L' },
      { id: 90204, title: 'Bone White / XL', price: 135, compareAtPrice: 155, available: true, color: 'Bone White', size: 'XL' },
      { id: 90205, title: 'Bone White / XXL', price: 135, compareAtPrice: 155, available: true, color: 'Bone White', size: 'XXL' },
    ],
  },
  {
    id: 903,
    title: 'HIIT PACE SHORT 5" TRAIL',
    type: 'Bottoms',
    price: 74,
    available: true,
    featuredImage: '/images/editorial-running.jpg',
    images: ['/images/editorial-running.jpg', '/images/product-1.jpg'],
    badge: 'ESSENTIAL',
    description:
      'Purpose-built for road and trail. Features an ergonomic chafe-free compression liner, secure water-resistant rear center zip pocket for large smartphones, and dual elastic side loops for energy gels.',
    fabricDetails:
      '85% Recycled Polyester, 15% Spandex body with anti-friction seamless inner brief. Bonded hem to eliminate friction across marathon distances.',
    colors: ['Deep Obsidian', 'Stone'],
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      { id: 90301, title: 'Deep Obsidian / S', price: 74, available: true, color: 'Deep Obsidian', size: 'S' },
      { id: 90302, title: 'Deep Obsidian / M', price: 74, available: true, color: 'Deep Obsidian', size: 'M' },
      { id: 90303, title: 'Deep Obsidian / L', price: 74, available: true, color: 'Deep Obsidian', size: 'L' },
      { id: 90304, title: 'Deep Obsidian / XL', price: 74, available: true, color: 'Deep Obsidian', size: 'XL' },
    ],
  },
  {
    id: 904,
    title: 'HIIT AERO RUNNING CAP & FLASK',
    type: 'Accessories',
    price: 45,
    available: true,
    featuredImage: '/images/hero-running.jpg',
    images: ['/images/hero-running.jpg'],
    description:
      'Ultralight 5-panel laser-cut running cap equipped with moisture-wicking sweatband and adjustable shock cord closure. Includes a 500ml BPA-free collapsible handheld running flask.',
    fabricDetails:
      'Cap: 100% Quick-dry nylon with UPF 50+ UV protection. Flask: 100% Food-grade TPU silicone with high-flow bite valve.',
    colors: ['Stealth Black', 'Ghost Grey'],
    sizes: ['One Size'],
    variants: [
      { id: 90401, title: 'Stealth Black / One Size', price: 45, available: true, color: 'Stealth Black', size: 'One Size' },
      { id: 90402, title: 'Ghost Grey / One Size', price: 45, available: true, color: 'Ghost Grey', size: 'One Size' },
    ],
  },
];

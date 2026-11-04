import type { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 901,
    title: 'HIIT THERMAL PRO LONG SLEEVE',
    type: 'Atasan Lengan Panjang',
    price: 88,
    compareAtPrice: 110,
    available: true,
    featuredImage: '/images/product-1.jpg',
    images: ['/images/product-1.jpg', '/images/editorial-running.jpg'],
    badge: 'PRODUK BARU',
    description:
      'Dirancang untuk latihan intensitas tinggi saat cuaca dingin. Bagian dalam bertekstur mikro-grid memberikan kehangatan optimal, sementara panel berlubang mikro di ketiak membantu melepaskan panas berlebih. Dilengkapi lubang ibu jari dan bukaan jam tangan yang tersembunyi.',
    fabricDetails:
      '78% poliamida daur ulang dan 22% elastana. Bahan lentur empat arah dengan teknologi pengelolaan kelembapan, serat antimikroba untuk membantu mengurangi bau, serta aksen reflektif 360 derajat.',
    colors: ['Hitam Obsidian', 'Hijau Pinus', 'Abu-abu'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: [
      { id: 90101, title: 'Hitam Obsidian / S', price: 88, compareAtPrice: 110, available: true, color: 'Hitam Obsidian', size: 'S' },
      { id: 90102, title: 'Hitam Obsidian / M', price: 88, compareAtPrice: 110, available: true, color: 'Hitam Obsidian', size: 'M' },
      { id: 90103, title: 'Hitam Obsidian / L', price: 88, compareAtPrice: 110, available: true, color: 'Hitam Obsidian', size: 'L' },
      { id: 90104, title: 'Hitam Obsidian / XL', price: 88, compareAtPrice: 110, available: true, color: 'Hitam Obsidian', size: 'XL' },
      { id: 90105, title: 'Hitam Obsidian / XXL', price: 88, compareAtPrice: 110, available: false, color: 'Hitam Obsidian', size: 'XXL' },
      { id: 90106, title: 'Hijau Pinus / M', price: 88, compareAtPrice: 110, available: true, color: 'Hijau Pinus', size: 'M' },
      { id: 90107, title: 'Hijau Pinus / L', price: 88, compareAtPrice: 110, available: true, color: 'Hijau Pinus', size: 'L' },
    ],
  },
  {
    id: 902,
    title: 'HIIT SHIELD WINDSHELL JACKET',
    type: 'Jaket',
    price: 135,
    compareAtPrice: 155,
    available: true,
    featuredImage: '/images/product-2.jpg',
    images: ['/images/product-2.jpg', '/images/hero-running.jpg'],
    badge: 'TERLARIS',
    description:
      'Jaket pelindung cuaca yang sangat ringan, dibuat dari kain ripstop mikro Jepang. Menahan angin dingin sekaligus mengalirkan panas melalui ventilasi di bagian belakang. Dapat dilipat dan disimpan di saku kerah agar ringkas dibawa.',
    fabricDetails:
      'Ripstop 100% nilon daur ulang dengan lapisan anti-air DWR bebas PFC yang lebih ramah lingkungan. Desain sangat ringkas dan dapat dilipat, dengan berat hanya 112 gram.',
    colors: ['Putih Gading', 'Hitam', 'Hijau Zaitun'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: [
      { id: 90201, title: 'Putih Gading / S', price: 135, compareAtPrice: 155, available: true, color: 'Putih Gading', size: 'S' },
      { id: 90202, title: 'Putih Gading / M', price: 135, compareAtPrice: 155, available: true, color: 'Putih Gading', size: 'M' },
      { id: 90203, title: 'Putih Gading / L', price: 135, compareAtPrice: 155, available: true, color: 'Putih Gading', size: 'L' },
      { id: 90204, title: 'Putih Gading / XL', price: 135, compareAtPrice: 155, available: true, color: 'Putih Gading', size: 'XL' },
      { id: 90205, title: 'Putih Gading / XXL', price: 135, compareAtPrice: 155, available: true, color: 'Putih Gading', size: 'XXL' },
    ],
  },
  {
    id: 903,
    title: 'HIIT PACE SHORT 5" TRAIL',
    type: 'Celana',
    price: 74,
    available: true,
    featuredImage: '/images/editorial-running.jpg',
    images: ['/images/editorial-running.jpg', '/images/product-1.jpg'],
    badge: 'ANDALAN',
    description:
      'Dirancang untuk lari di jalan maupun lintasan alam. Dilengkapi celana dalam kompresi ergonomis yang nyaman tanpa gesekan, saku ritsleting belakang tahan air untuk ponsel berukuran besar, serta dua loop elastis untuk gel energi.',
    fabricDetails:
      'Bahan utama 85% poliester daur ulang dan 15% spandeks, dengan celana dalam tanpa jahitan untuk mengurangi gesekan. Kelim berperekat membantu mencegah iritasi saat berlari jarak jauh.',
    colors: ['Hitam Pekat', 'Abu-abu Batu'],
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      { id: 90301, title: 'Hitam Pekat / S', price: 74, available: true, color: 'Hitam Pekat', size: 'S' },
      { id: 90302, title: 'Hitam Pekat / M', price: 74, available: true, color: 'Hitam Pekat', size: 'M' },
      { id: 90303, title: 'Hitam Pekat / L', price: 74, available: true, color: 'Hitam Pekat', size: 'L' },
      { id: 90304, title: 'Hitam Pekat / XL', price: 74, available: true, color: 'Hitam Pekat', size: 'XL' },
    ],
  },
  {
    id: 904,
    title: 'HIIT AERO RUNNING CAP & FLASK',
    type: 'Aksesori',
    price: 45,
    available: true,
    featuredImage: '/images/hero-running.jpg',
    images: ['/images/hero-running.jpg'],
    description:
      'Topi lari lima panel yang sangat ringan dengan potongan laser, pita penyerap keringat, dan tali elastis yang dapat disesuaikan. Termasuk botol minum genggam lipat 500 ml yang bebas BPA.',
    fabricDetails:
      'Topi: nilon 100% cepat kering dengan perlindungan UV UPF 50+. Botol: silikon TPU 100% berbahan aman untuk makanan dengan katup minum beraliran tinggi.',
    colors: ['Hitam', 'Abu-abu'],
    sizes: ['Satu Ukuran'],
    variants: [
      { id: 90401, title: 'Hitam / Satu Ukuran', price: 45, available: true, color: 'Hitam', size: 'Satu Ukuran' },
      { id: 90402, title: 'Abu-abu / Satu Ukuran', price: 45, available: true, color: 'Abu-abu', size: 'Satu Ukuran' },
    ],
  },
];

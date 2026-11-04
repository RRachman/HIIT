export interface ProductVariant {
  id: number;
  title: string;
  price: number;
  compareAtPrice?: number;
  available: boolean;
  color: string;
  size: string;
}

export interface Product {
  id: number;
  title: string;
  type: string;
  price: number;
  compareAtPrice?: number;
  available: boolean;
  featuredImage: string;
  images: string[];
  description: string;
  fabricDetails: string;
  colors: string[];
  sizes: string[];
  variants: ProductVariant[];
  badge?: string;
}

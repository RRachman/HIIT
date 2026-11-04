import type { Product, ProductVariant } from './product';

export interface CartLineItem {
  id: number;
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

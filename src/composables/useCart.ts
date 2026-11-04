import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cart';

export function useCart() {
  const store = useCartStore();
  const { items, itemCount, subtotal, isDrawerOpen } = storeToRefs(store);
  return { store, items, itemCount, subtotal, isDrawerOpen };
}

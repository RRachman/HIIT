import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/product';

export function useProducts() {
  const store = useProductStore();
  const { products, loading, error } = storeToRefs(store);
  return { store, products, loading, error };
}

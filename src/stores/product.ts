import { defineStore } from 'pinia';
import { getProducts } from '@/services/productService';
import type { Product } from '@/types/product';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: '',
    loaded: false,
  }),
  actions: {
    async fetchProducts() {
      if (this.loaded || this.loading) return;
      this.loading = true;
      this.error = '';
      try {
        this.products = await getProducts();
        this.loaded = true;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Products could not be loaded.';
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async refreshProducts() {
      this.loaded = false;
      await this.fetchProducts();
    },
  },
});

import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/pages/AboutPage.vue';
import CartPage from '@/pages/CartPage.vue';
import CheckoutPage from '@/pages/CheckoutPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import FAQPage from '@/pages/FAQPage.vue';
import HomePage from '@/pages/HomePage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import ProductDetailPage from '@/pages/ProductDetailPage.vue';
import ShopPage from '@/pages/ShopPage.vue';
import MainLayout from '@/components/templates/MainLayout.vue';

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', name: 'home', component: HomePage },
        { path: 'shop', name: 'shop', component: ShopPage },
        { path: 'products/:id', name: 'product', component: ProductDetailPage },
        { path: 'cart', name: 'cart', component: CartPage },
        { path: 'checkout', name: 'checkout', component: CheckoutPage },
        { path: 'about', name: 'about', component: AboutPage },
        { path: 'contact', name: 'contact', component: ContactPage },
        { path: 'faq', name: 'faq', component: FAQPage },
        { path: ':pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
      ],
    },
  ],
});

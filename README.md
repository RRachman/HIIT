# HIIT Running Storefront

A custom Vue 3 storefront using the established HIIT Running visual design. Product data and cart operations run locally by default; API services are ready for a Laravel REST backend.

The storefront uses Barlow as its single typography family across headings, body copy, navigation, controls, and buttons. The home hero places the existing running image behind an overlaid header and left-aligned two-line headline, with responsive sizing.

## Frontend structure

The app uses Atomic Design: `src/components/atoms` contains basic controls, `molecules` combines them into focused interactions, `organisms` contains reusable page sections, and `templates` define shared layouts. Files in `src/pages` stay focused on route data/state and compose those sections.

For example, the homepage composes `HeroSection`, `FeaturedProductsSection`, `BrandStorySection`, `BrandBenefitsSection`, and `NewsletterSection`. Shop, product, cart, checkout, contact, and FAQ pages follow the same page-composition pattern. Shared sections such as the brand story, benefits, and order summary are reused where their purpose matches.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```sh
npm install
npm run dev
```

Vite serves the storefront at `http://localhost:3000`.

## Laravel API

Copy `.env.example` to `.env.local` and set `VITE_API_BASE_URL` to the Laravel API root (for example `http://localhost:8000/api`). Product reads use the API when configured and use the separated local product catalog otherwise. API errors are surfaced rather than silently replaced with mock responses.

Cart persistence is local to this browser during development. Checkout does not process a payment; it clearly indicates that no order or transaction has been created until a backend is connected.

## Commands

- `npm run dev` — start Vite
- `npm run typecheck` — type-check Vue and TypeScript
- `npm run build` — create a production build
- `npm run preview` — preview the production build

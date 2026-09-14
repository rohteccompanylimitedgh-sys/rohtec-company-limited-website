# Rohtec Company Limited — E-commerce Website

A responsive Rohtec Company Limited storefront with product catalogue, search/filtering, cart, wishlist, checkout flow, WhatsApp ordering, delivery-location capture, and a starter admin panel.

## Run locally

1. Install Node.js 18+.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm start`.
5. Open `http://localhost:3000`.

## Production payment integration

The checkout UI is ready for Paystack. Before going live, add a secure server-side Paystack integration, webhook verification, order database, authenticated admin users, stock management and delivery-fee rules. Never expose a Paystack secret key in browser JavaScript.

Paystack supports Ghana GHS and mobile-money providers including MTN, Airtel/Tigo and Telecel, as well as cards; availability should be configured in the merchant dashboard. See the official documentation: https://paystack.com/docs/payments/payment-channels/

## Replace demo content

Edit `public/app.js` to add the real Rohtec product catalogue, prices, descriptions and image URLs. Replace the text logo with the supplied Rohtec logo if desired.

## Brand colors
This version uses a light-blue and white Rohtec theme throughout the storefront, with darker blue accents for buttons, navigation, cards, and footer elements.

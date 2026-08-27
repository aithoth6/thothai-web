const APP_URL = import.meta.env.VITE_APP_URL ?? "https://app.thothaigh.com";

// TODO: verify the exact signup/onboarding entry route in the app repo
export const SIGNUP_URL = `${APP_URL}/onboarding`;
export const LOGIN_URL = `${APP_URL}/login`;

// Thoth-fleet rider portal — phone + password signup, separate from the restaurant
// account above. Confirmed against the app repo's router (App.tsx): /rider/signup,
// /rider/login.
export const RIDER_SIGNUP_URL = `${APP_URL}/rider/signup`;
export const RIDER_LOGIN_URL = `${APP_URL}/rider/login`;

// Base URL of the marketing site — used in sitemap and structured data
export const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://thothfood.com";

// Base URL of the Railway API backend — used for contact form POST
export const API_URL = import.meta.env.VITE_API_URL ?? APP_URL;

// Central Thoth ordering number — customers use this to browse menus and
// place orders from Free-tier restaurants. Infrastructure coming soon.
// TODO: replace placeholder with real central number when available.
export const WHATSAPP_ORDER_URL = "https://wa.me/233XXXXXXXXXX";

// Thoth Technologies direct business number — for inquiries, partnerships,
// restaurant onboarding questions, and support.
export const WHATSAPP_BUSINESS_URL = "https://wa.me/233533769658";

export const CONTACT_EMAIL = "aithoth6@gmail.com";

export const SOCIAL_URLS = {
  instagram: "https://www.instagram.com/_.t.h.othai",
  twitter: "https://www.tiktok.com/@order_on_whatsap",
  facebook: "https://www.facebook.com/thoth1234",
};

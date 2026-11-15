const APP_URL = import.meta.env.VITE_APP_URL ?? "https://app.thothaigh.com";

// Confirmed against the app repo's router (App.tsx): /signup creates the account (and
// accepts ?plan=), /onboarding is the wizard that runs after — it requires a session and
// redirects an unauthenticated visitor to plain /signup, dropping any query string. Pointing
// this at /onboarding silently lost the ?plan= param on every marketing-site signup link,
// which is why Discovery (?plan=MARKETPLACE) landed everyone on FREE instead.
export const SIGNUP_URL = `${APP_URL}/signup`;
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

// Central Thoth ordering number (+233 55 944 8358): customers use it to browse menus and
// place orders. Live. The prefilled "Hi" opens the welcome.
export const WHATSAPP_ORDER_URL = "https://wa.me/233559448358?text=Hi";

// The TEST version of the same chat (staging: Paystack test mode, no real money, no food sent).
// Linked only from the launch page and clearly labelled there. +233 50 295 9481.
export const WHATSAPP_TEST_URL = "https://wa.me/233502959481?text=Hi%2C%20I%27m%20testing";

// Thoth Technologies direct business number — for inquiries, partnerships,
// restaurant onboarding questions, and support.
export const WHATSAPP_BUSINESS_URL = "https://wa.me/233533769658";

export const CONTACT_EMAIL = "aithoth6@gmail.com";

export const SOCIAL_URLS = {
  instagram: "https://www.instagram.com/_.t.h.othai",
  twitter: "https://www.tiktok.com/@order_on_whatsap",
  facebook: "https://www.facebook.com/thoth1234",
};

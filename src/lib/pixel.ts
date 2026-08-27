declare global {
  interface Window {
    fbq?: (command: string, event: string, params?: Record<string, unknown>) => void;
    _fbq?: unknown;
  }
}

export function trackWaClick() {
  if (typeof window !== "undefined") window.fbq?.("trackCustom", "wa_click");
}

export function trackStartFree() {
  if (typeof window !== "undefined") window.fbq?.("trackCustom", "start_free_click");
}

export function trackRiderApply() {
  if (typeof window !== "undefined") window.fbq?.("trackCustom", "rider_apply_click");
}

export function trackContactSubmit() {
  if (typeof window !== "undefined") window.fbq?.("trackCustom", "contact_submit");
}

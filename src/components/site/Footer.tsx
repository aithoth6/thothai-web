import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Sparkles, Copy, Check } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { SIGNUP_URL, LOGIN_URL, RIDER_LOGIN_URL, CONTACT_EMAIL, SOCIAL_URLS, WHATSAPP_BUSINESS_URL } from "@/lib/site";
import { trackStartFree } from "@/lib/pixel";
import { ThothAILogo } from "@/components/site/ThothAILogo";

export function Footer() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-page py-16">
        {/* ThothShop teaser */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-dark-card p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Coming Soon
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
                Food was just the beginning.
              </h3>
              <p className="mt-2 text-base text-white/65">
                <span className="font-semibold text-white">ThothShop</span> — WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts. If you sell it, you can sell it on WhatsApp.
              </p>
            </div>
            <a
              href={`${WHATSAPP_BUSINESS_URL}?text=${encodeURIComponent("Hi Thoth team, I'd like early access to ThothShop.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white/10 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/15 md:w-auto"
            >
              Get early access
            </a>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/">
              <ThothAILogo size="md" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              Building the commerce layer for Africa on WhatsApp. Food, fashion, everything — one chat away.
            </p>
            <p className="mt-6 text-xs text-white/40">
              Accra, Ghana
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">Products</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/thothfood" className="text-white/70 hover:text-primary">Thoth</Link></li>
              <li><Link to="/thothshop" className="text-white/70 hover:text-primary">ThothShop</Link></li>
              <li><Link to="/thothfood/how-it-works" className="text-white/70 hover:text-primary">How it works</Link></li>
              <li><Link to="/thothfood/for-restaurants" className="text-white/70 hover:text-primary">For Restaurants</Link></li>
              <li><Link to="/thothfood/for-riders" className="text-white/70 hover:text-primary">For Riders</Link></li>
              <li><Link to="/thothfood/pricing" className="text-white/70 hover:text-primary">Pricing</Link></li>
              <li><a href={`${SIGNUP_URL}?plan=FREE`} onClick={trackStartFree} className="text-white/70 hover:text-primary">Start free</a></li>
              <li><a href={LOGIN_URL} className="text-white/70 hover:text-primary">Restaurant Login</a></li>
              <li><a href={RIDER_LOGIN_URL} className="text-white/70 hover:text-primary">Rider Login</a></li>
              <li><Link to="/contact" search={{ role: undefined }} className="text-white/70 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">Follow</h4>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Instagram, href: SOCIAL_URLS.instagram, label: "Instagram" },
                { Icon: SiTiktok, href: SOCIAL_URLS.twitter, label: "TikTok" },
                { Icon: Facebook, href: SOCIAL_URLS.facebook, label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <button
              onClick={copyEmail}
              className="mt-6 flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70"
              title="Copy email address"
            >
              {copied ? <Check className="h-3 w-3 text-primary" /> : <Copy className="h-3 w-3" />}
              {copied ? "Copied!" : CONTACT_EMAIL}
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Thoth Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/terms" className="hover:text-white/70">Terms</Link>
            <Link to="/privacy" className="hover:text-white/70">Privacy</Link>
            <p>Made with ❤️ in Accra</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wallet, ShieldCheck, Smartphone, MapPin, Clock, Banknote, ArrowRight, CheckCircle2
} from "lucide-react";
import { RIDER_SIGNUP_URL, RIDER_LOGIN_URL } from "@/lib/site";
import { trackRiderSignup } from "@/lib/pixel";

export const Route = createFileRoute("/thothfood/for-riders")({
  head: () => ({
    meta: [
      { title: "For Riders — Thoth" },
      { name: "description", content: "Deliver for Thoth restaurants. Guaranteed pay on every trip, weekly payouts to MoMo, sign up in minutes." },
      { property: "og:title", content: "Deliver for Thoth — guaranteed pay, weekly payouts" },
      { property: "og:description", content: "Sign up online, get verified, start earning. Base pay plus distance on every delivery, paid to your MoMo every week." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og/thothfood.png" },
    ],
  }),
  component: ForRiders,
});

const features = [
  { icon: Banknote, title: "Guaranteed pay per trip", desc: "Base pay plus a distance rate on every delivery — paid even if a customer isn't reachable at drop-off." },
  { icon: Wallet, title: "Weekly payouts to MoMo", desc: "Earnings are settled every week straight to your Mobile Money account. No cash pickups, no chasing payment." },
  { icon: Smartphone, title: "Sign up from your phone", desc: "Apply online with your Ghana Card, a selfie, and your vehicle details — no office visit needed." },
  { icon: MapPin, title: "See your earnings anytime", desc: "Your rider portal tracks every delivery, your running balance, and your payout account in one place." },
  { icon: ShieldCheck, title: "Verified before you're live", desc: "We check your details before approving you, so both riders and restaurants can trust who's on the road." },
  { icon: Clock, title: "Own vehicle, your ride", desc: "Bike, motorbike, or car — bring what you already have and start taking deliveries once you're approved." },
];

const steps = [
  "Create your rider account",
  "Add your Ghana Card and a selfie",
  "Tell us your vehicle details",
  "Add an emergency contact",
  "Submit for review",
  "Get approved and start delivering",
];

function ForRiders() {
  return (
    <>
      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              For Riders
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Deliver for Thoth. <span className="text-primary">Get paid every week.</span>
            </h1>
            <p className="mt-6 max-w-lg body-text text-foreground/65">
              Sign up from your phone, get verified, and start earning guaranteed pay on every trip — settled to your Mobile Money account every week.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={RIDER_SIGNUP_URL}
                className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.55)]"
                onClick={trackRiderSignup}
              >
                Sign up to ride <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={RIDER_LOGIN_URL}
                className="inline-flex h-14 items-center rounded-full border border-border px-6 font-semibold hover:bg-muted"
              >
                Rider login
              </a>
            </div>
          </div>

          {/* Earnings mock */}
          <div className="relative max-w-full overflow-x-hidden">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 to-success/15 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-dark text-dark-foreground shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="h-2.5 w-2.5 rounded-full bg-success" />
                <span className="ml-3 text-xs text-white/50">Rider Portal</span>
              </div>
              <div className="grid grid-cols-2 gap-3 p-5 text-xs">
                {[
                  { label: "This week's earnings", v: "₵340", c: "text-success" },
                  { label: "Deliveries completed", v: "28", c: "text-primary" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-dark-card p-3">
                    <p className="text-white/50">{s.label}</p>
                    <p className={`mt-1 font-display text-2xl font-extrabold ${s.c}`}>{s.v}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 px-5 pb-5">
                {[
                  { id: "Trip #218", item: "Osu → East Legon, 4.2km", status: "₵18.40", c: "bg-success/20 text-success" },
                  { id: "Trip #217", item: "Adenta → Madina, 2.6km", status: "₵14.10", c: "bg-success/20 text-success" },
                  { id: "Payout", item: "Sent to MoMo · Monday", status: "₵340.00", c: "bg-primary/20 text-primary" },
                ].map((o) => (
                  <div key={o.id} className="flex items-center justify-between rounded-xl bg-dark-card p-3 text-xs">
                    <div>
                      <p className="font-mono text-white/50">{o.id}</p>
                      <p className="mt-0.5 font-medium">{o.item}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${o.c}`}>{o.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why ride with Thoth</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Straightforward pay, no surprises.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-background p-6 ring-1 ring-border transition-transform hover:-translate-y-1">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold">{f.title}</h3>
                <p className="mt-1.5 body-text text-foreground/65">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="bg-background py-24">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Getting started</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                Applying takes minutes.
              </h2>
              <p className="mt-4 max-w-md text-foreground/65">
                Everything happens on your phone — no office visit. We review your details and let you know as soon as you're approved.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary font-display text-base font-extrabold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-2 font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-dark py-24 text-dark-foreground">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Fair by design</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Your pay is protected.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">Paid even on a cash-on-delivery issue</h3>
              <p className="mt-1.5 body-text text-white/60">
                If a customer isn't reachable or can't pay on delivery, that's not on you — you're still paid for the trip you made.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">Clear, itemised earnings</h3>
              <p className="mt-1.5 body-text text-white/60">
                Every trip, every payout — visible in your portal, not buried in a chat thread.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
              Ready to start delivering?
            </h2>
            <p className="mt-2 text-base opacity-80">Sign up free. Get verified. Start earning.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={RIDER_SIGNUP_URL}
              className="inline-flex h-14 items-center gap-2 rounded-full bg-dark px-8 font-semibold text-dark-foreground hover:bg-dark-card"
              onClick={trackRiderSignup}
            >
              Sign up to ride <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              search={{ role: undefined }}
              className="inline-flex h-14 items-center rounded-full border border-primary-foreground/30 px-6 font-semibold opacity-80 hover:opacity-100"
            >
              or talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

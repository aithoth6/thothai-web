import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wallet,
  MapPin,
  ShieldCheck,
  Smartphone,
  Clock,
  Banknote,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { RIDER_SIGNUP_URL, RIDER_LOGIN_URL } from "@/lib/site";
import { trackRiderApply } from "@/lib/pixel";

export const Route = createFileRoute("/thothfood/for-riders")({
  head: () => ({
    meta: [
      { title: "For Riders — Thoth" },
      {
        name: "description",
        content:
          "Deliver for Thoth. Get paid a base fee plus per-kilometre on every trip, weekly to your mobile money — even when a customer isn't home and it isn't your fault. Apply free.",
      },
      { property: "og:title", content: "Deliver for Thoth — get paid every trip" },
      {
        property: "og:description",
        content:
          "Apply free, get approved, start earning. Weekly payouts to your MoMo account, full transparency on every cedi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og/thothfood-riders.png" },
    ],
  }),
  component: ForRiders,
});

const features = [
  {
    icon: Banknote,
    title: "Base fee + per-kilometre",
    desc: "Every trip pays a base amount plus a rate per kilometre — the farther the trip, the more it pays. No distance, no data? You still get the base.",
  },
  {
    icon: Wallet,
    title: "Weekly payouts to MoMo",
    desc: "Paid out every week, Monday to Sunday, straight to your MTN, Vodafone, or AirtelTigo number. We verify the name on the account before it's saved, so it's never sent to the wrong person.",
  },
  {
    icon: ShieldCheck,
    title: "Paid even when it's not your fault",
    desc: "Customer not home, no cash, wrong address — you still get paid for the trip you made. The only time a trip goes unpaid is if you're the one who didn't complete it.",
  },
  {
    icon: Clock,
    title: "See every cedi, any time",
    desc: "Your own portal shows what you've earned this week, your full history, and exactly when you were paid. No calling the office to ask.",
  },
  {
    icon: MapPin,
    title: "Real jobs, not empty promises",
    desc: "Delivery requests come straight from restaurants taking real WhatsApp orders — not a gig board hoping for work to show up.",
  },
  {
    icon: Smartphone,
    title: "Simple to run",
    desc: "Accept and manage every delivery from the same rider app on your phone — pickup, drop-off, and confirmation, one screen.",
  },
];

const steps = [
  "Sign up with your phone number and a password",
  "Fill in your details — personal info, Ghana Card, vehicle, an emergency contact",
  "We review your application",
  "Once approved, download the rider app and you're ready to accept trips",
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-dark-card p-5 text-center">
      <p className="font-display text-3xl font-extrabold text-primary">{value}</p>
      <p className="mt-1 text-xs text-white/60">{label}</p>
    </div>
  );
}

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
              Deliver for Thoth. <span className="text-primary">Get paid every trip.</span>
            </h1>
            <p className="mt-6 max-w-lg body-text text-foreground/65">
              A base fee plus distance on every delivery, paid out weekly to your mobile money.
              Apply free — no cost to sign up, no cost to apply.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={RIDER_SIGNUP_URL}
                className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.55)]"
                onClick={trackRiderApply}
              >
                Apply to ride <ArrowRight className="h-4 w-4" />
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
                <span className="ml-3 text-xs text-white/50">Rider Earnings</span>
              </div>
              <div className="grid grid-cols-2 gap-3 p-5">
                <Stat label="Earned this week" value="₵184" />
                <Stat label="Deliveries this week" value="21" />
              </div>
              <div className="space-y-2 px-5 pb-5">
                {[
                  { id: "Trip #1042", note: "3.2 km", amount: "+₵14.40" },
                  { id: "Trip #1041", note: "1.8 km", amount: "+₵11.60" },
                  { id: "Weekly payout", note: "Sent to MTN MoMo", amount: "−₵184.00" },
                ].map((e) => (
                  <div
                    key={e.id}
                    className="flex items-center justify-between rounded-xl bg-dark-card p-3 text-xs"
                  >
                    <div>
                      <p className="font-medium">{e.id}</p>
                      <p className="mt-0.5 text-white/50">{e.note}</p>
                    </div>
                    <span className="font-mono font-semibold text-success">{e.amount}</span>
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
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why ride with Thoth
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Fair pay, made visible.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-background p-6 ring-1 ring-border transition-transform hover:-translate-y-1"
              >
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

      {/* How it works / onboarding */}
      <section className="bg-background py-24">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Getting started
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                Four steps to your first delivery.
              </h2>
              <p className="mt-4 max-w-md text-foreground/65">
                Applying costs nothing. Once your application is approved, you're on the rider app
                and ready to accept trips.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
                >
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
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Built on trust
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Your money, always visible.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Verified before it's saved",
                desc: "We check your mobile money account against the network and show you the name it's registered under before your payout details are saved.",
              },
              {
                icon: CheckCircle2,
                title: "Full history, no surprises",
                desc: "Every delivery, every payout, timestamped and visible in your own portal.",
              },
              {
                icon: Wallet,
                title: "Cash deliveries, handled fairly",
                desc: "Cash-on-delivery trips are tracked the same way — what you collect and what you're owed are always kept separate and clear.",
              },
            ].map((t) => (
              <div key={t.title} className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-1.5 body-text text-white/60">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
              Ready to start earning?
            </h2>
            <p className="mt-2 text-base opacity-80">Free to apply. Paid weekly. No hidden cuts.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={RIDER_SIGNUP_URL}
              className="inline-flex h-14 items-center gap-2 rounded-full bg-dark px-8 font-semibold text-dark-foreground hover:bg-dark-card"
              onClick={trackRiderApply}
            >
              Apply to ride <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              search={{ role: undefined }}
              className="inline-flex h-14 items-center rounded-full border border-primary-foreground/30 px-6 font-semibold opacity-80 hover:opacity-100"
            >
              or ask us a question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

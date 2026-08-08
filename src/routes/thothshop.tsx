import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_BUSINESS_URL } from "@/lib/site";

export const Route = createFileRoute("/thothshop")({
  head: () => ({
    meta: [
      { title: "ThothShop — Sell anything on WhatsApp" },
      { name: "description", content: "WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts — sell anything without an app or website." },
      { property: "og:title", content: "ThothShop — Sell anything on WhatsApp" },
      { property: "og:description", content: "WhatsApp commerce for every small business in Ghana. Coming soon from Thoth Technologies." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og/thothfood.png" },
    ],
  }),
  component: ThothShop,
});

function ThothShop() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-dark py-24 text-dark-foreground md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 0%, oklch(0.745 0.165 60 / 0.35) 0%, transparent 70%), radial-gradient(40% 40% at 80% 100%, oklch(0.72 0.18 145 / 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="container-page relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" /> Coming Soon
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
          >
            Sell anything on{" "}
            <span className="text-primary">WhatsApp.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl body-text text-white/65"
          >
            WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts — same infrastructure as Thoth, extended to every merchant category.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.17 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <a
              href={`${WHATSAPP_BUSINESS_URL}?text=${encodeURIComponent("Hi Thoth team, I'm interested in joining the ThothShop waitlist.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5"
            >
              Join the waitlist <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-sm text-white/40">Drop us a message — we'll reach out before public launch.</p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-dark py-20 text-dark-foreground">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">What you can sell</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              If you sell it, you can sell it on WhatsApp.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { emoji: "👗", label: "Fashion & Clothing" },
              { emoji: "💄", label: "Beauty & Cosmetics" },
              { emoji: "📱", label: "Electronics" },
              { emoji: "🎨", label: "Art & Crafts" },
              { emoji: "🏠", label: "Home & Living" },
              { emoji: "🥗", label: "Groceries & Food" },
              { emoji: "📚", label: "Books & Stationery" },
              { emoji: "🛠️", label: "Tools & Hardware" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-dark-card p-6 text-center"
              >
                <span className="text-4xl">{c.emoji}</span>
                <p className="text-sm font-semibold text-white/80">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="bg-background py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Same rails. New categories.</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Built on everything Thoth proved.
            </h2>
            <p className="mt-4 text-foreground/65">
              Payments, catalogue, order management, live tracking — the same infrastructure powering restaurants in Accra, extended to every merchant type.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { title: "WhatsApp-native catalogue", desc: "Your entire product range in a WhatsApp catalogue. No website, no app, no friction." },
              { title: "MoMo & card checkout", desc: "Customers pay with MTN, Telecel, AirtelTigo, or card — right inside the chat." },
              { title: "Order management dashboard", desc: "Manage orders, inventory, and deliveries from a real-time web dashboard." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-secondary p-7 ring-1 ring-border">
                <h3 className="font-display text-xl font-bold">{f.title}</h3>
                <p className="mt-2 body-text text-foreground/65 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Be first to know when ThothShop launches.
          </h2>
          <p className="mt-2 opacity-80">Leave your details — we'll reach out before public launch.</p>
          <a
            href={`${WHATSAPP_BUSINESS_URL}?text=${encodeURIComponent("Hi Thoth team, I'd like early access to ThothShop.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex h-14 items-center gap-2 rounded-full bg-dark px-8 font-semibold text-dark-foreground hover:bg-dark-card"
          >
            Get early access <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}

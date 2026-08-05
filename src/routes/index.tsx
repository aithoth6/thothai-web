import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles, Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL, SIGNUP_URL } from "@/lib/site";
import { motion } from "motion/react";
import { IOIIcon } from "@/components/site/ThothFoodLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thoth Technologies — Building the commerce layer for Africa on WhatsApp" },
      { name: "description", content: "Thoth Technologies builds WhatsApp-native commerce infrastructure for Africa. Thoth lets restaurants take orders on WhatsApp. ThothShop brings the same to every merchant." },
      { property: "og:title", content: "Thoth Technologies" },
      { property: "og:description", content: "Building the commerce layer for Africa on WhatsApp." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const products = [
  {
    name: "Thoth",
    status: "live" as const,
    tagline: "Order food on WhatsApp.",
    desc: "WhatsApp-native food ordering for restaurants in Ghana. Customers browse the menu, pay with MoMo or card, and track their order — all inside the WhatsApp chat they already use. Restaurants manage it all from a real-time kitchen dashboard.",
    href: "/thothfood",
    cta: "Order now",
    image: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=720&h=360&fit=crop&q=80",
  },
  {
    name: "ThothShop",
    status: "coming" as const,
    tagline: "Sell anything on WhatsApp.",
    desc: "WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts — same infrastructure as Thoth, extended to every merchant category.",
    href: "/thothshop",
    cta: "Join waitlist",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=720&h=360&fit=crop&q=80",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-dark py-24 text-dark-foreground md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 0%, oklch(0.745 0.165 60 / 0.4) 0%, transparent 70%), radial-gradient(40% 40% at 20% 100%, oklch(0.72 0.18 145 / 0.15) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: "url('/images/hero-bg-graphic.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="container-page relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
          >
            🇬🇭 Live in Accra, Ghana
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
          >
            Building the commerce layer for Africa{" "}
            <span className="text-primary">on WhatsApp.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl body-text text-white/65"
          >
            We build WhatsApp-native commerce infrastructure for Africa — starting with food, expanding to everything you can sell.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.17 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Link
              to="/thothfood"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.6)]"
            >
              See Thoth <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 font-semibold text-white/80 hover:bg-white/5"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-dark py-24 text-dark-foreground">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Product family</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              One platform. Every category.
            </h2>
            <p className="mt-4 text-white/60">
              We started with food because the ordering flow is universal and the pain is daily. ThothShop extends the same rails to every merchant type in Ghana.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <div
                key={p.name}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-dark-card"
              >
                {/* Image banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                  {p.status !== "live" && <div className="absolute inset-0 bg-dark/55" />}
                  <div className="absolute right-4 top-4">
                    {p.status === "live" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-success/20 px-3 py-1 text-xs font-semibold text-success backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-success" /> Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-dark/60 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur-sm">
                        <Sparkles className="h-3 w-3" /> Coming soon
                      </span>
                    )}
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="flex items-center gap-2 font-display text-2xl font-extrabold">
                    {p.name}
                    {p.name === "Thoth" && <IOIIcon className="h-5 w-5 flex-shrink-0 text-primary" />}
                  </h3>
                  <p className="mt-1 font-display text-lg font-semibold text-primary">{p.tagline}</p>
                  <p className="mt-3 flex-1 body-text text-white/60">{p.desc}</p>
                  <Link
                    to={p.href as any}
                    className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                  >
                    {p.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-dark pb-24 text-dark-foreground">
        <div className="container-page">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-dark-card p-10 text-center md:p-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get in touch</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Partner, invest, or just say hi.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
              Whether you're a restaurant ready to go live, an investor curious about WhatsApp commerce in Africa, or a developer who wants to build with us — we're easy to reach.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                search={{ role: undefined }}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Contact us
              </Link>
              <Link
                to="/contact"
                search={{ role: undefined }}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white/80 hover:bg-white/5"
              >
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/40">
              <MapPin className="h-3.5 w-3.5" /> Accra, Ghana
            </div>
          </div>
        </div>
      </section>

      {/* THOTHFOOD CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-4xl">
              Ready to take orders on WhatsApp?
            </h2>
            <p className="mt-1 opacity-80">Thoth is live now. Free to start.</p>
          </div>
          <a
            href={`${SIGNUP_URL}?plan=FREE`}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-dark px-7 font-semibold text-dark-foreground hover:bg-dark-card"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}

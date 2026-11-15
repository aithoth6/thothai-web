import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShoppingBag, Wallet, MapPin, FlaskConical, Check } from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_ORDER_URL, WHATSAPP_TEST_URL, WHATSAPP_BUSINESS_URL } from "@/lib/site";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { LAUNCH, LAUNCH_VENDORS, COMING_NEXT } from "@/data/launch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = `Thoth Chop is coming to ${LAUNCH.place}`;
const DESCRIPTION = `Order food from ${LAUNCH.place} on WhatsApp: no app, no account. Try the test version now, with no money taken and no food sent.`;

export const Route = createFileRoute("/thothfood/launch")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Thoth` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://thothaigh.com/thothfood/launch" },
      // WhatsApp and most apps need an ABSOLUTE image address for the preview card.
      { property: "og:image", content: "https://thothaigh.com/og/thothfood-launch.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://thothaigh.com/og/thothfood-launch.png" },
    ],
  }),
  component: Launch,
});

const steps = [
  {
    icon: MessageCircle,
    title: "Say hi on WhatsApp",
    desc: "Message our number. No app to download and no account to make. We greet you and help you find food.",
  },
  {
    icon: ShoppingBag,
    title: "Pick what you want",
    desc: "Browse the menus, or just tell us what you feel like (\"waakye with egg\"). Choose your extras on the page that opens.",
  },
  {
    icon: Wallet,
    title: "Pay and follow it",
    desc: "Pay with MoMo or card, or cash when it arrives. We message you as your order is prepared and delivered.",
  },
];

const faqs = [
  {
    q: "What does \"test version\" mean?",
    a: "It is the real thing with the money and the kitchen taken out. You chat, pick food, check out and follow an order, but no money is taken, no food is made and nothing is delivered. A pretend kitchen moves your test order along so you can see every step.",
  },
  {
    q: "Will I be charged in the test version?",
    a: "No. Payments run in test mode, so no real money moves. If a payment page asks for details, use the test details shown there, never your real card.",
  },
  {
    q: "When can I order real food?",
    a: `Ordering for real opens ${LAUNCH.liveLabel}. The vendors above are the first to take orders from ${LAUNCH.place}.`,
  },
  {
    q: "How is it different from the test number?",
    a: "The test number is only for trying things out. When we open, you will message our ordering number and your food will really come.",
  },
  {
    q: "I run a food business. How do I get on?",
    a: "Start free on our restaurants page, or message us on WhatsApp and we will help you set up.",
  },
];

function Launch() {
  const live = LAUNCH.phase === "live";
  return (
    <article>
      {/* HEADER */}
      <section className="relative overflow-hidden bg-dark py-20 text-dark-foreground md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 0%, oklch(0.745 0.165 60 / 0.35) 0%, transparent 70%), radial-gradient(40% 40% at 10% 100%, oklch(0.72 0.18 145 / 0.18) 0%, transparent 70%)",
          }}
        />
        <div className="container-page relative mx-auto max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {live ? "Now open" : "Announcement"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            {live ? (
              <>Thoth Chop is open at <span className="text-primary">{LAUNCH.place}.</span></>
            ) : (
              <>Thoth Chop is coming to <span className="text-primary">{LAUNCH.place}.</span></>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
          >
            Order food from the kitchens around {LAUNCH.place} without leaving WhatsApp. No app, no account, no stress.
            {live ? " Message us and your food is on its way." : ` Ordering opens ${LAUNCH.liveLabel}, and you can try it today.`}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {live ? (
              <>
                <WhatsAppLink className="group inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60)]">
                  Order on WhatsApp <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </WhatsAppLink>
                <WhatsAppLink href={WHATSAPP_TEST_URL} className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 text-base font-semibold text-white/90 hover:bg-white/5">
                  Try the test version
                </WhatsAppLink>
              </>
            ) : (
              <>
                <WhatsAppLink href={WHATSAPP_TEST_URL} className="group inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60)]">
                  <FlaskConical className="h-5 w-5" /> Try it now (test) <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </WhatsAppLink>
                <a href="#how" className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 text-base font-semibold text-white/90 hover:bg-white/5">
                  See how it works
                </a>
              </>
            )}
          </motion.div>
          {!live && (
            <p className="mt-4 text-sm text-white/50">
              Test version: no money taken, no food sent.{LAUNCH.testUntilLabel ? ` Open until ${LAUNCH.testUntilLabel}.` : ""}
            </p>
          )}
        </div>
      </section>

      {/* WHO'S ON FIRST */}
      <section className="bg-background py-20">
        <div className="container-page mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Who is on first</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your {LAUNCH.place} kitchens, in one chat.
          </h2>
          <p className="mt-4 text-muted-foreground">
            These vendors are the first on Thoth Chop. Ask for any of them by name, or just say what you feel like and we will show you what is open.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {LAUNCH_VENDORS.map((v) => (
              <li key={v.name} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-2xl">{v.emoji}</span>
                <span>
                  <span className="block font-display text-lg font-bold leading-tight">{v.name}</span>
                  <span className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {LAUNCH.place} · {v.what}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            Coming next: {COMING_NEXT.join(" and ")}. They are already on Thoth Chop and appear under "See more vendors".
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-secondary py-20">
        <div className="container-page mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Three steps. All in WhatsApp.</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-background p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEST VERSION */}
      <section className="bg-background py-20">
        <div className="container-page mx-auto max-w-3xl">
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <FlaskConical className="h-3.5 w-3.5" /> Test version
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">Try it before it opens.</h2>
            <p className="mt-3 text-muted-foreground">
              Message the test number and go through a whole order, start to finish. It is safe to play with:
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                "No money is taken. Payments run in test mode.",
                "No food is made or sent. A pretend kitchen moves your order along.",
                "You will see the real menus, so you know what to expect.",
                "Tell us what felt wrong. Your feedback shapes the real thing.",
              ].map((t) => (
                <li key={t} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" /> <span>{t}</span></li>
              ))}
            </ul>
            <WhatsAppLink href={WHATSAPP_TEST_URL} className="group mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground">
              Open the test chat <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-20">
        <div className="container-page mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Questions</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Good to know.</h2>
          <Accordion type="single" collapsible className="mt-8 rounded-3xl bg-background px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-4xl">
              {live ? "Hungry? Just WhatsApp it." : "Be there on day one."}
            </h2>
            <p className="mt-1 opacity-80">
              {live ? `Order from ${LAUNCH.place} on WhatsApp now.` : `Try the test version today. Ordering opens ${LAUNCH.liveLabel}.`}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <WhatsAppLink
              href={live ? WHATSAPP_ORDER_URL : WHATSAPP_TEST_URL}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-dark px-7 font-semibold text-dark-foreground hover:bg-dark-card"
            >
              {live ? "Order on WhatsApp" : "Try it now (test)"} <ArrowRight className="h-4 w-4" />
            </WhatsAppLink>
            <a
              href={WHATSAPP_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full border border-primary-foreground/40 px-6 font-semibold hover:bg-primary-foreground/10"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <div className="bg-background py-8 text-center text-sm text-muted-foreground">
        <Link to="/thothfood" className="underline-offset-4 hover:underline">← Back to Thoth</Link>
      </div>
    </article>
  );
}

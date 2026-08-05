import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { WHATSAPP_BUSINESS_URL, SIGNUP_URL, CONTACT_EMAIL } from "@/lib/site";
import { trackContactSubmit } from "@/lib/pixel";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    role: search.role === "restaurant" ? "restaurant" : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact — Thoth" },
      { name: "description", content: "Get in touch with the Thoth team. Customer or restaurant owner — we'd love to hear from you." },
      { property: "og:title", content: "Contact Thoth" },
      { property: "og:description", content: "Reach the Thoth team in Accra. Fastest reply via WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og/thothfood.png" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { role } = Route.useSearch();
  const [intent, setIntent] = useState<string>(role ?? "");
  const [sent, setSent] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    const intentLabel: Record<string, string> = {
      customer: 'Customer',
      restaurant: 'Restaurant owner',
      investor: 'Investor',
      developer: 'Developer',
      other: 'Other',
    };

    const subject = encodeURIComponent(
      `ThothFood contact — ${intentLabel[intent] ?? 'General inquiry'}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nI am a: ${intentLabel[intent] ?? intent}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    trackContactSubmit();
    setSent(true);
  };

  return (
    <>
      <section className="bg-dark py-20 text-dark-foreground md:py-28">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Contact
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl">
            Let's <span className="text-primary">chat.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl body-text text-white/65">
            Hungry customer with a question? Restaurant ready to go live? Drop us a line.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-success/15 text-success">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-extrabold">Message sent!</h2>
                <p className="mt-2 max-w-sm text-foreground/65">
                  Your email client should have opened with your message pre-filled — just hit Send.
                  We'll get back to you at the email address you provided.
                </p>
              </div>
            ) : (
              <>
                {/* Restaurant nudge */}
                {intent === "restaurant" && (
                  <div className="mb-6 flex items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Want to list your restaurant?</p>
                      <p className="mt-0.5 text-xs text-foreground/60">Sign up free and be live instantly — no call needed.</p>
                    </div>
                    <a
                      href={`${SIGNUP_URL}?plan=FREE`}
                      className="inline-flex h-9 flex-shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground"
                    >
                      Start free <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                )}

                <form onSubmit={submit} className="space-y-5">
                  {/* Honeypot — hidden from real users, traps bots */}
                  <input
                    ref={honeypotRef}
                    name="website"
                    type="text"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
                  />

                  <div>
                    <label className="text-sm font-semibold">I am a…</label>
                    <select
                      required
                      name="intent"
                      value={intent}
                      onChange={(e) => setIntent(e.target.value)}
                      className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="" disabled>Select one</option>
                      <option value="customer">Customer</option>
                      <option value="restaurant">Restaurant owner</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-semibold">Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Ama Boateng"
                        className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold">Email</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder="Tell us what's on your mind…"
                      className="mt-2 w-full resize-none rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[0_12px_30px_-12px_oklch(0.745_0.165_60/0.6)] sm:w-auto sm:justify-start"
                  >
                    <span>Send message</span> <Send className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info */}
          <div className="space-y-5">
            {/* WhatsApp — preferred channel */}
            <div className="rounded-2xl bg-dark p-6 text-dark-foreground">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-success text-success-foreground">
                <MessageCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">Fastest: WhatsApp us</h3>
              <p className="mt-1 text-white/65">Message the team directly — we reply faster here than anywhere else.</p>
              <a
                href={WHATSAPP_BUSINESS_URL}
                className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Open WhatsApp
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-secondary p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">Email</h3>
              <p className="mt-1 text-foreground/65">
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">{CONTACT_EMAIL}</a>
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">Based in</h3>
              <p className="mt-1 text-foreground/65">Accra, Ghana 🇬🇭<br />Serving customers and restaurants across the country.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

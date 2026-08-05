import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Thoth Technologies" },
      { name: "description", content: "Privacy Policy for Thoth, a product of Thoth Technologies. Explains what data we collect, how we use it, and your rights under Ghana's Data Protection Act 2012." },
    ],
  }),
  component: Privacy,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-10 first:border-none first:pt-0">
      <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/70">{children}</div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-7">
      <h3 className="font-display text-base font-semibold text-foreground md:text-lg">{title}</h3>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground/70">{children}</div>
    </div>
  );
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}

function Privacy() {
  return (
    <>
      <section className="bg-dark py-16 text-dark-foreground">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/50">Last updated: 4 July 2026</p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container-page mx-auto max-w-3xl space-y-10">

          <Section title="1. Who We Are">
            <p>
              This Privacy Policy explains how Thoth Technologies ("we", "us", "our") collects, uses,
              and protects personal information in connection with Thoth, our WhatsApp-native food
              ordering platform. We are committed to protecting your privacy in accordance with
              Ghana's Data Protection Act, 2012 (Act 843).
            </p>
            <p>
              For privacy-related questions, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <Sub title="2.1 From Restaurants (Dashboard Users)">
              <Ul>
                <li><strong className="font-semibold text-foreground">Account information</strong> — name, business name, email address, phone number, and WhatsApp number</li>
                <li><strong className="font-semibold text-foreground">Business information</strong> — restaurant profile, address, delivery zones, menu items and prices, operating hours</li>
                <li><strong className="font-semibold text-foreground">Payment information</strong> — Paystack merchant account details, MoMo wallet number for payouts. We do not store card or MoMo PIN details — these are handled directly by Paystack.</li>
                <li><strong className="font-semibold text-foreground">Operational data</strong> — order history, revenue figures, staff accounts created, promotions run</li>
                <li><strong className="font-semibold text-foreground">Communications</strong> — messages sent to our support team</li>
              </Ul>
            </Sub>
            <Sub title="2.2 From Customers (WhatsApp Ordering)">
              <Ul>
                <li><strong className="font-semibold text-foreground">WhatsApp number</strong> — used to identify your session and communicate order updates</li>
                <li><strong className="font-semibold text-foreground">Order information</strong> — items ordered, delivery address, order notes, order history</li>
                <li><strong className="font-semibold text-foreground">Payment information</strong> — payment method selected (MoMo or card), transaction reference. Actual payment details are processed by Paystack and not stored by us.</li>
                <li><strong className="font-semibold text-foreground">Location data</strong> — delivery address as provided by you during ordering</li>
              </Ul>
            </Sub>
            <Sub title="2.3 Automatically Collected Data">
              <Ul>
                <li><strong className="font-semibold text-foreground">Usage data</strong> — pages visited on this website, time spent, browser type, device type, IP address</li>
                <li><strong className="font-semibold text-foreground">Analytics</strong> — aggregate usage patterns collected via privacy-respecting analytics tools</li>
              </Ul>
            </Sub>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <Ul>
              <li>Operate and improve the Thoth platform</li>
              <li>Process and fulfil food orders</li>
              <li>Process payments and manage merchant payouts via Paystack</li>
              <li>Send order status updates via WhatsApp</li>
              <li>Manage restaurant accounts, menus, and staff access</li>
              <li>Resolve disputes between restaurants and customers</li>
              <li>Send service communications (billing, policy updates, platform announcements)</li>
              <li>Comply with legal obligations under Ghanaian law</li>
            </Ul>
            <p>
              We do not sell your personal information to third parties. We do not use your data for
              targeted advertising.
            </p>
          </Section>

          <Section title="4. WhatsApp and Meta">
            <p>
              Thoth uses the WhatsApp Business API (provided by Meta Platforms, Inc.) to send and
              receive messages. When you interact with Thoth via WhatsApp, your messages pass through
              Meta's infrastructure. Meta's own privacy policy applies to data processed by WhatsApp.
              We encourage you to review{" "}
              <a href="https://www.whatsapp.com/legal/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                WhatsApp's Privacy Policy
              </a>.
            </p>
            <p>
              We use WhatsApp only to fulfil your orders and communicate about them. We do not use
              your WhatsApp number for marketing without your explicit consent.
            </p>
          </Section>

          <Section title="5. Paystack">
            <p>
              Payments on Thoth are processed by Paystack (a Stripe company), a licensed payment
              service provider operating in Ghana. When you pay for an order, your payment details
              are entered on Paystack's secure payment page and are governed by{" "}
              <a href="https://paystack.com/gh/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Paystack's Privacy Policy
              </a>. We receive only a transaction reference and confirmation — not your card or MoMo
              details.
            </p>
          </Section>

          <Section title="6. Data Sharing">
            <p>We share personal information only in the following circumstances:</p>
            <Ul>
              <li>
                <strong className="font-semibold text-foreground">With the restaurant you order from</strong> — your WhatsApp number, delivery address, order details, and order notes are shared with the restaurant to fulfil your order.
              </li>
              <li>
                <strong className="font-semibold text-foreground">With Paystack</strong> — for payment processing and merchant payouts.
              </li>
              <li>
                <strong className="font-semibold text-foreground">With service providers</strong> — we use third-party services to operate the platform (cloud hosting, database, image storage, error monitoring). These providers process data only on our instructions and under confidentiality obligations.
              </li>
              <li>
                <strong className="font-semibold text-foreground">For legal compliance</strong> — if required by law, court order, or regulatory authority in Ghana.
              </li>
            </Ul>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain personal information for as long as necessary to provide the service and
              comply with legal obligations:
            </p>
            <Ul>
              <li>Restaurant account data — retained while the account is active and for 2 years after closure</li>
              <li>Order records — retained for 5 years for accounting and dispute resolution purposes</li>
              <li>Customer WhatsApp sessions — session data is deleted 30 days after the last interaction</li>
              <li>Payment records — retained for 7 years as required by Ghanaian financial regulations</li>
            </Ul>
          </Section>

          <Section title="8. Your Rights">
            <p>Under Ghana's Data Protection Act 2012, you have the right to:</p>
            <Ul>
              <li><strong className="font-semibold text-foreground">Access</strong> — request a copy of the personal information we hold about you</li>
              <li><strong className="font-semibold text-foreground">Correction</strong> — request that inaccurate information be corrected</li>
              <li><strong className="font-semibold text-foreground">Deletion</strong> — request deletion of your personal data, subject to legal retention requirements</li>
              <li><strong className="font-semibold text-foreground">Objection</strong> — object to certain uses of your data</li>
            </Ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>. We will respond within 7 days.
            </p>
          </Section>

          <Section title="9. Security">
            <p>
              We implement technical and organisational measures to protect your personal information,
              including encrypted data transmission (HTTPS/TLS), access controls, and secure cloud
              infrastructure. No system is completely secure — if you believe your account has been
              compromised, contact us immediately.
            </p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>
              Thoth is not directed at children under 13. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided us with personal
              information, contact us and we will delete it promptly.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify users of material
              changes via email (for restaurants) or via a notice on this page. The "Last updated"
              date at the top of this page reflects the most recent revision.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              For any privacy questions or to exercise your rights under the Data Protection Act
              2012, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </Section>

        </div>
      </section>
    </>
  );
}

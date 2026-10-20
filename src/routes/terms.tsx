import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Thoth Technologies" },
      {
        name: "description",
        content:
          "Terms of Service for Thoth, a product of Thoth Technologies. Governs use of the platform by restaurants and customers.",
      },
    ],
  }),
  component: Terms,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-10 first:border-none first:pt-0">
      <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/70">
        {children}
      </div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-7">
      <h3 className="font-display text-base font-semibold text-foreground md:text-lg">{title}</h3>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground/70">
        {children}
      </div>
    </div>
  );
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}

function Terms() {
  return (
    <>
      <section className="bg-dark py-16 text-dark-foreground">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-white/50">Last updated: 26 August 2026</p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container-page mx-auto max-w-3xl space-y-10">
          <Section title="1. About These Terms">
            <p>
              These Terms of Service ("Terms") govern your use of Thoth, a WhatsApp-native food
              ordering platform operated by Thoth Technologies ("we", "us", "our"). Thoth connects
              restaurants in Ghana with customers who order food via WhatsApp.
            </p>
            <p>
              By creating a restaurant account, placing an order, or otherwise using any part of the
              Thoth platform, you agree to these Terms. If you do not agree, do not use the
              platform.
            </p>
            <p>
              These Terms are governed by the laws of the Republic of Ghana, including the
              Electronic Transactions Act, 2008 (Act 772) and the Data Protection Act, 2012 (Act
              843).
            </p>
          </Section>

          <Section title="2. Who These Terms Apply To">
            <p>These Terms apply to two types of users:</p>
            <Ul>
              <li>
                <strong className="font-semibold text-foreground">Restaurants</strong> — businesses
                that sign up to list their menu and receive orders through Thoth. Restaurants access
                the platform via the web dashboard at app.thothaigh.com.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Customers</strong> — individuals
                who browse menus and place orders via WhatsApp. Customers do not need to create an
                account.
              </li>
            </Ul>
            <p>
              Additional terms specific to each user type are set out in sections 5 and 6 below.
            </p>
          </Section>

          <Section title="3. The Thoth Platform">
            <p>
              Thoth is a WhatsApp-native commerce platform. We enable restaurants to list their
              menus and receive orders via WhatsApp, and we enable customers to discover and order
              food from a variety of restaurants — all without leaving their WhatsApp chat.
            </p>
            <p>
              Where delivery is offered, Thoth Technologies facilitates the logistics process,
              coordinating delivery of orders from the restaurant to the customer. However, delivery
              is subject to availability in the customer's area, and we reserve the right to
              determine delivery zones and timelines.
            </p>
            <p>
              The restaurant is solely responsible for the preparation, quality, and accuracy of the
              food. Thoth Technologies is not liable for any issues arising from food quality or
              preparation.
            </p>
          </Section>

          <Section title="4. Platform Fees">
            <p>Thoth operates on four plans:</p>
            <Ul>
              <li>
                <strong className="font-semibold text-foreground">Free plan</strong> — restaurants
                pay no monthly fee. Free includes your own WhatsApp Business number, up to 30 menu
                items, up to 2 staff seats, and 50 orders per month. Orders beyond 50 in a calendar
                month continue to be accepted — this is a soft limit, not a hard stop — but each
                additional order carries a small per-order fee billed to the restaurant.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Pro plan</strong> — restaurants
                pay a flat monthly subscription fee (GHS 299/month at the time of writing, subject
                to change with 30 days' notice). Pro has no monthly order ceiling, up to 200 menu
                items, up to 10 staff seats, and 20 free WhatsApp broadcasts per month. No per-order
                platform fee is charged on this plan.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Discovery plan</strong> —
                restaurants pay no monthly fee and do not connect their own WhatsApp number;
                instead, the restaurant is listed on the shared Thoth WhatsApp number. A commission
                is added to the customer's checkout total on orders received through the shared
                number and is retained by Thoth Technologies.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Max plan</strong> — a custom,
                invite-only plan for high-volume kitchens. Max is not currently available as a
                self-serve signup.
              </li>
            </Ul>
            <p>
              Thoth Technologies reserves the right to change pricing, plan limits, and fees with 30
              days' written notice to affected restaurants via email or in-app notification.
            </p>
          </Section>

          <Section title="5. Restaurant Terms">
            <Sub title="5.1 Account Registration">
              <p>
                To list your restaurant on Thoth you must create an account and complete the
                onboarding process, including connecting a WhatsApp number (your own WhatsApp
                Business number on the Free and Pro plans, or the shared Thoth number on the
                Discovery plan), uploading your menu, and connecting a Paystack merchant account for
                payment processing.
              </p>
              <p>
                You must provide accurate, current, and complete information. You are responsible
                for maintaining the security of your account credentials.
              </p>
            </Sub>
            <Sub title="5.2 Menu and Pricing">
              <p>
                You are responsible for ensuring your menu items, descriptions, photos, and prices
                are accurate and up to date. Prices listed on the platform must match the prices you
                charge for the same items in person. You may not use the platform to charge
                customers more than your in-person prices.
              </p>
            </Sub>
            <Sub title="5.3 Order Fulfilment">
              <p>
                Once a customer places and pays for an order, you are obligated to fulfil that order
                promptly and accurately. If you are unable to fulfil an order (for example, due to
                item unavailability), you must notify the customer promptly via WhatsApp and issue a
                refund where applicable. Repeated failures to fulfil confirmed, paid orders may
                result in deprecation or reduction of trust score and ultimately suspension or
                termination of account.
              </p>
            </Sub>
            <Sub title="5.4 Payments and Payouts">
              <p>
                Payments from customers are processed by Paystack, a licensed payment service
                provider. Paystack processing fees are borne by the customer and are not deducted
                from your earnings. Your earnings are calculated as follows:
              </p>
              <Ul>
                <li>
                  <strong className="font-semibold text-foreground">Free and Pro plans</strong> —
                  your earnings equal the full order value. No platform commission is deducted from
                  orders placed through your own WhatsApp number. On the Free plan, orders beyond
                  your monthly included volume carry a separate per-order fee, as described in
                  Section 4.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">Discovery plan</strong> — your
                  earnings equal the order value minus the Thoth platform commission for orders
                  received through the shared Thoth WhatsApp number, which is retained by Thoth
                  Technologies.
                </li>
              </Ul>
              <p>
                Earnings from paid online orders are credited to your Thoth merchant wallet on a T+1
                basis — the next business day following order completion.
              </p>
              <p>
                Withdrawals to your registered MoMo account are instant and require no approval or
                request — your balance is available to you immediately at any time.
              </p>
            </Sub>
            <Sub title="5.5 Cash on Delivery (COD)">
              <p>
                If you enable Cash on Delivery, customers may select this option at checkout. COD
                orders are not pre-paid. You accept the risk of non-payment on COD orders. Thoth
                Technologies is not liable for unpaid COD orders.
              </p>
            </Sub>
            <Sub title="5.6 Conduct and Prohibited Use">
              <p>You agree not to:</p>
              <Ul>
                <li>List items that are illegal to sell in Ghana</li>
                <li>
                  Provide false or misleading information about your food, prices, or business
                </li>
                <li>Use the platform to harass, threaten, or defraud customers</li>
                <li>
                  Attempt to circumvent the platform by directing customers to pay you directly
                  outside of the Thoth payment flow
                </li>
              </Ul>
            </Sub>
          </Section>

          <Section title="6. Customer Terms">
            <Sub title="6.1 Ordering">
              <p>
                When you place an order via WhatsApp, you are entering into a contract with the
                restaurant, not with Thoth Technologies. We facilitate the order and payment but are
                not a party to the food purchase itself.
              </p>
              <p>
                By confirming an order and completing payment, you agree to pay the total amount
                shown, including any applicable platform service fee (on orders from Discovery-plan
                restaurants) and Paystack processing fee.
              </p>
            </Sub>
            <Sub title="6.2 Refunds and Cancellations">
              <p>
                Once an order is confirmed and payment is processed, cancellations are at the
                restaurant's discretion. If a restaurant is unable to fulfil your order, you are
                entitled to a full refund of the amount paid. Refunds are processed via Paystack and
                may take 3–5 business days to reflect in your account or MoMo wallet.
              </p>
            </Sub>
            <Sub title="6.3 Disputes">
              <p>
                If you have an issue with an order (wrong items, missing items, food quality),
                please raise a dispute through the Thoth platform within 24 hours of receiving your
                order. We will mediate between you and the restaurant in good faith. Our dispute
                resolution decisions are final within the platform but do not affect your statutory
                rights under Ghanaian consumer protection law.
              </p>
            </Sub>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              Thoth, the Thoth logo, and all platform software and content are the property of Thoth
              Technologies. Restaurants retain ownership of their own menu content (photos,
              descriptions, prices) but grant Thoth Technologies a licence to display that content
              on the platform for the purpose of operating the service.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the fullest extent permitted by Ghanaian law, Thoth Technologies is not liable for:
            </p>
            <Ul>
              <li>The quality, safety, or fitness of any food ordered through the platform</li>
              <li>Delays, errors, or failures in food preparation or delivery</li>
              <li>Loss of revenue or profits arising from platform downtime</li>
              <li>Any indirect or consequential loss arising from use of the platform</li>
            </Ul>
            <p>
              Our total liability to any user for any claim arising from use of the platform shall
              not exceed the total fees paid by that user to Thoth Technologies in the 3 months
              preceding the claim.
            </p>
          </Section>

          <Section title="9. Termination">
            <p>
              We may suspend or terminate any restaurant account at any time if we reasonably
              believe the account is being used in breach of these Terms, or if the restaurant
              repeatedly fails to fulfil paid orders. We will provide notice where possible.
            </p>
            <p>
              Restaurants may close their account at any time. Any outstanding wallet balance is
              available for instant withdrawal before or at the time of account closure, minus any
              amounts owed to Thoth Technologies.
            </p>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>
              We may update these Terms from time to time. We will notify restaurants of material
              changes via email or in-app notification at least 14 days before they take effect.
              Continued use of the platform after that date constitutes acceptance of the updated
              Terms.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              For any questions about these Terms, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}

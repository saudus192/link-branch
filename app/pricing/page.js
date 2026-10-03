import Link from "next/link";

export const metadata = {
  title: "Pricing - LinkBranch",
  description:
    "See the LinkBranch plans. Start for free and explore the options for creators, businesses and teams.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    audience: "For getting started",
    featured: false,
    cta: "Get started for free",
    features: [
      "Your own LinkBranch URL",
      "One page for all your links",
      "Share with a link or QR code",
      "Basic customization",
    ],
  },
  {
    name: "Pro",
    price: "$5",
    audience: "For creators growing an audience",
    featured: true,
    cta: "Get started",
    features: [
      "Everything in Free",
      "More customization options",
      "Audience insights",
      "Extra ways to organize your links",
    ],
  },
  {
    name: "Business",
    price: "$15",
    audience: "For brands and small teams",
    featured: false,
    cta: "Get started",
    features: [
      "Everything in Pro",
      "Branding that matches your business",
      "Additional pages for products or campaigns",
      "Deeper audience insights",
    ],
  },
];

const included = [
  {
    title: "Your own URL",
    text: "Every plan comes with a unique LinkBranch address that you can share anywhere.",
  },
  {
    title: "QR code sharing",
    text: "Bring offline visitors to your page with a code they can scan with a phone camera.",
  },
  {
    title: "Mobile-friendly pages",
    text: "Your page is designed to look good on phones, where most link in bio visits happen.",
  },
];

const faqs = [
  {
    q: "Do I need a credit card to start?",
    a: "No. You can create your page from the home page or the create page without entering any payment details.",
  },
  {
    q: "Are the paid plans real?",
    a: "LinkBranch is a Linktree-inspired demo project. The Pro and Business plans are shown to illustrate how pricing could work, and no payments are taken.",
  },
  {
    q: "Can I share my page for free?",
    a: "Yes. The Free plan includes your own LinkBranch URL and a QR code, so you can share your page anywhere at no cost.",
  },
  {
    q: "What happens to my link if I change plans?",
    a: "Your handle is what makes up your LinkBranch URL, so it is not tied to the plan you choose.",
  },
];

function PlanCard({ plan }) {
  const { name, price, audience, featured, cta, features } = plan;

  return (
    <article
      className={`rounded-2xl p-8 flex flex-col gap-6 ${
        featured ? "bg-[#254F1A] text-white" : "bg-white text-[#1E2330]"
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-2xl font-extrabold">{name}</h3>
          {featured && (
            <span className="bg-[#D2E823] text-[#254F1A] text-sm font-bold py-1 px-3 rounded-4xl">
              Most popular
            </span>
          )}
        </div>
        <p className={featured ? "text-white" : "text-[#254F1A] font-medium"}>
          {audience}
        </p>
      </div>

      <p className="flex items-end gap-1">
        <span className="text-6xl font-extrabold">{price}</span>
        <span className="pb-2 font-medium">/ month</span>
      </p>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span
              aria-hidden="true"
              className={`font-extrabold ${
                featured ? "text-[#D2E823]" : "text-[#254F1A]"
              }`}
            >
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/create"
        className={`py-4 px-6 rounded-4xl focus:outline-none font-bold text-center ${
          featured
            ? "bg-[#D2E823] text-black hover:bg-[#D6ED24]"
            : "bg-[#254F1A] text-white hover:bg-[#26511B]"
        }`}
      >
        {cta}
      </Link>
    </article>
  );
}

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#D2E823] px-6 sm:px-10 pt-45 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#254F1A] font-extrabold max-w-4xl">
            Simple pricing that starts at free.
          </h1>
          <p className="text-lg text-[#254F1A] max-w-2xl">
            Create your LinkBranch page at no cost, then explore plans designed for creators, businesses and small teams as your audience grows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/create"
              className="bg-[#254F1A] text-white py-4 px-6 rounded-4xl hover:bg-[#26511B] focus:outline-none font-bold text-center"
            >
              Get started for free
            </Link>
            <Link
              href="#plans"
              className="border-2 border-[#254F1A] text-[#254F1A] py-4 px-6 rounded-4xl hover:bg-[#254F1A] hover:text-white focus:outline-none font-bold text-center transition-colors"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="bg-[#E8EFD6] px-6 sm:px-10 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl text-[#1E2330] font-extrabold">
              Pick the plan that fits you
            </h2>
            <p className="text-lg text-black">
              Start with the Free plan and move up whenever you need more from your page.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="bg-white/60 rounded-2xl p-5 text-[#1E2330] max-w-3xl">
            <span className="font-bold">Please note:</span> LinkBranch is a Linktree-inspired demo project. Plans and prices on this page are illustrative, and no payments are collected or processed.
          </p>
        </div>
      </section>

      {/* Included in every plan */}
      <section className="bg-[#2665D6] px-6 sm:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <h2 className="text-4xl md:text-5xl text-[#D2E823] font-extrabold max-w-3xl">
            Included in every plan
          </h2>
          <ul className="grid gap-8 md:grid-cols-3">
            {included.map((item) => (
              <li key={item.title} className="flex flex-col gap-3">
                <h3 className="text-2xl font-extrabold text-white">{item.title}</h3>
                <p className="text-lg text-white">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#E8EFD6] px-6 sm:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <h2 className="text-4xl md:text-5xl text-[#1E2330] font-extrabold">
            Pricing questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((item) => (
              <details key={item.q} className="group bg-white rounded-2xl p-6">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-lg text-[#1E2330] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-2xl text-[#254F1A] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base text-[#1E2330]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#780016] px-6 sm:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
          <h2 className="text-4xl md:text-5xl text-[#E9C0E9] font-extrabold max-w-3xl">
            Start free. Grow at your own pace.
          </h2>
          <p className="text-lg text-white max-w-2xl">
            Claim your handle, add your links and share your LinkBranch with the world.
          </p>
          <Link
            href="/create"
            className="bg-[#E9C0E9] text-black py-4 px-6 rounded-4xl hover:bg-[#EEC4EE] focus:outline-none font-bold text-center w-full sm:w-auto"
          >
            Get started for free
          </Link>
        </div>
      </section>
    </div>
  );
}
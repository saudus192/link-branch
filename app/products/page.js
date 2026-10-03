import Link from "next/link";

export const metadata = {
  title: "Products - LinkBranch",
  description:
    "Explore what LinkBranch offers: a customizable link in bio page, easy sharing with your own URL and QR code, and audience insights.",
};

const products = [
  {
    title: "Link in bio page",
    text: "One page that holds everything you create, curate and sell, so your audience never has to hunt for the right link.",
    points: [
      "Collect social, website and store links in one place",
      "Get your own LinkBranch URL",
      "Works on any social media profile",
    ],
  },
  {
    title: "Customization",
    text: "Make your page look like you. Adjust the details so your LinkBranch matches your brand.",
    points: [
      "Personalize the look of your page",
      "Keep your brand consistent across platforms",
      "Update anytime without changing your link",
    ],
  },
  {
    title: "Sharing",
    text: "Use your unique LinkBranch URL wherever your audience finds you, online or offline.",
    points: [
      "Add one URL to Instagram, TikTok, Twitter and YouTube",
      "Use a QR code to bring offline traffic to your page",
      "Keep the same link everywhere",
    ],
  },
  {
    title: "Audience insights",
    text: "Understand what your audience engages with so you can improve your page over time.",
    points: [
      "Track engagement over time",
      "See which links get attention",
      "Make informed updates on the fly",
    ],
  },
];

const steps = [
  {
    title: "Claim your handle",
    text: "Pick the handle you want and start from the home page. It becomes your unique LinkBranch URL.",
  },
  {
    title: "Add your links",
    text: "Bring together your social profiles, websites, stores and anything else you want to share.",
  },
  {
    title: "Share it everywhere",
    text: "Put your LinkBranch URL in your bios and use the QR code for offline places.",
  },
];

const faqs = [
  {
    q: "What is LinkBranch?",
    a: "LinkBranch is a Linktree-inspired link in bio project. It lets you put all your important links behind one URL that you can share on any platform.",
  },
  {
    q: "How do I get my LinkBranch URL?",
    a: "Enter your preferred handle on the home page or go to the create page. Your handle becomes the end of your LinkBranch URL.",
  },
  {
    q: "Can I use one link across different platforms?",
    a: "Yes. The same LinkBranch URL can go in your Instagram, TikTok, Twitter or YouTube bio, so everything stays in one place.",
  },
  {
    q: "Do I need technical skills to use it?",
    a: "No. Creating and customizing your page is designed to be simple and quick, with no coding involved.",
  },
];

function ProductCard({ index, title, text, points }) {
  return (
    <article className="bg-white rounded-2xl p-8 flex flex-col gap-4">
      <span className="w-10 h-10 rounded-full bg-[#254F1A] text-[#D2E823] font-extrabold flex items-center justify-center">
        {index + 1}
      </span>
      <h3 className="text-2xl font-extrabold text-[#1E2330]">{title}</h3>
      <p className="text-base text-[#1E2330]">{text}</p>
      <ul className="flex flex-col gap-2 text-[#254F1A] font-medium">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#D2E823] px-6 sm:px-10 pt-45 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#254F1A] font-extrabold max-w-4xl">
            Everything you need for your link in bio.
          </h1>
          <p className="text-lg text-[#254F1A] max-w-2xl">
            LinkBranch brings your links, your style and your audience insights together in one simple page you can share anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/create"
              className="bg-[#254F1A] text-white py-4 px-6 rounded-4xl hover:bg-[#26511B] focus:outline-none font-bold text-center"
            >
              Get started for free
            </Link>
            <Link
              href="#products"
              className="border-2 border-[#254F1A] text-[#254F1A] py-4 px-6 rounded-4xl hover:bg-[#254F1A] hover:text-white focus:outline-none font-bold text-center transition-colors"
            >
              Explore products
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-[#E8EFD6] px-6 sm:px-10 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl text-[#1E2330] font-extrabold">
              One link, four ways it helps you
            </h2>
            <p className="text-lg text-black">
              Each part of LinkBranch is built around a simple goal: make it easy to share what you do and understand who is paying attention.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product, index) => (
              <ProductCard key={product.title} index={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#2665D6] px-6 sm:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <h2 className="text-4xl md:text-5xl text-[#D2E823] font-extrabold max-w-3xl">
            Up and running in three steps
          </h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-3">
                <span className="text-6xl font-extrabold text-[#D2E823]">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-extrabold text-white">{step.title}</h3>
                <p className="text-lg text-white">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#E8EFD6] px-6 sm:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <h2 className="text-4xl md:text-5xl text-[#1E2330] font-extrabold">
            Frequently asked questions
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
            Ready to build your LinkBranch?
          </h2>
          <p className="text-lg text-white max-w-2xl">
            Claim your handle, add your links and share one URL everywhere your audience finds you.
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
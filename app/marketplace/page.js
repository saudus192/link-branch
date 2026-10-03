import Link from "next/link";

export const metadata = {
  title: "Marketplace - LinkBranch",
  description:
    "Discover the platforms, stores and services you can connect to your LinkBranch page.",
};

const categories = [
  {
    title: "Social profiles",
    text: "Send visitors to the places where you post and connect with your audience every day.",
    examples: ["Instagram", "TikTok", "Twitter", "Facebook", "LinkedIn"],
  },
  {
    title: "Video and music",
    text: "Share your latest upload, playlist or release so people can watch and listen in one tap.",
    examples: ["YouTube", "Spotify", "SoundCloud", "Apple Music", "Twitch"],
  },
  {
    title: "Shops and products",
    text: "Point your audience to your online store, product pages or a single item you want to promote.",
    examples: ["Shopify", "Etsy", "Amazon", "Your own website"],
  },
  {
    title: "Support and donations",
    text: "Give fans and readers an easy way to back your work through the platform you already use.",
    examples: ["Patreon", "Ko-fi", "Buy Me a Coffee", "GoFundMe"],
  },
  {
    title: "Bookings and contact",
    text: "Make it simple for clients to schedule a call, send an email or reach you on chat.",
    examples: ["Calendly", "WhatsApp", "Email", "Google Forms"],
  },
  {
    title: "Writing and portfolio",
    text: "Showcase your articles, newsletter, code or design work in one organized place.",
    examples: ["Blog", "Newsletter", "GitHub", "Behance"],
  },
];

const points = [
  {
    title: "Bring your own links",
    text: "Any link can go on your page. If it has a web address, your audience can reach it from your LinkBranch URL.",
  },
  {
    title: "Sell where you already sell",
    text: "LinkBranch sends visitors to your store or checkout. Payments stay on the platform you already trust.",
  },
  {
    title: "Keep everything in one place",
    text: "Instead of changing your bio every time something new launches, update your page and keep the same URL.",
  },
];

function CategoryCard({ title, text, examples }) {
  return (
    <article className="bg-white rounded-2xl p-8 flex flex-col gap-4">
      <h3 className="text-2xl font-extrabold text-[#1E2330]">{title}</h3>
      <p className="text-base text-[#1E2330]">{text}</p>
      <ul className="flex flex-wrap gap-2 mt-auto pt-2">
        {examples.map((name) => (
          <li
            key={name}
            className="bg-[#E8EFD6] text-[#254F1A] text-sm font-bold py-1.5 px-3 rounded-4xl"
          >
            {name}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function MarketplacePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#D2E823] px-6 sm:px-10 pt-45 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#254F1A] font-extrabold max-w-4xl">
            Connect everything you share and sell.
          </h1>
          <p className="text-lg text-[#254F1A] max-w-2xl">
            From social profiles to online stores, LinkBranch brings the platforms you already use together behind one simple link.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/create"
              className="bg-[#254F1A] text-white py-4 px-6 rounded-4xl hover:bg-[#26511B] focus:outline-none font-bold text-center"
            >
              Get started for free
            </Link>
            <Link
              href="#categories"
              className="border-2 border-[#254F1A] text-[#254F1A] py-4 px-6 rounded-4xl hover:bg-[#254F1A] hover:text-white focus:outline-none font-bold text-center transition-colors"
            >
              See what you can connect
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-[#E8EFD6] px-6 sm:px-10 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl text-[#1E2330] font-extrabold">
              Whatever you do, there is a link for it
            </h2>
            <p className="text-lg text-black">
              These are some of the most popular things people add to their link in bio. The platforms shown are examples, and you are free to add any link you like.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#2665D6] px-6 sm:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <h2 className="text-4xl md:text-5xl text-[#D2E823] font-extrabold max-w-3xl">
            One hub that works with your platforms
          </h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {points.map((point, index) => (
              <li key={point.title} className="flex flex-col gap-3">
                <span className="text-6xl font-extrabold text-[#D2E823]">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-extrabold text-white">{point.title}</h3>
                <p className="text-lg text-white">{point.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#780016] px-6 sm:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
          <h2 className="text-4xl md:text-5xl text-[#E9C0E9] font-extrabold max-w-3xl">
            Put it all behind one link.
          </h2>
          <p className="text-lg text-white max-w-2xl">
            Claim your handle, add the links that matter and share your LinkBranch anywhere your audience finds you.
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
import Link from "next/link";

export const metadata = {
  title: "Learn - LinkBranch",
  description:
    "Simple guides to help you get the most out of your link in bio, from writing a great bio to sharing your link and QR code.",
};

const guides = [
  {
    tag: "Basics",
    title: "What is a link in bio?",
    text: "Many social platforms let you place only one clickable link in your profile. A link in bio solves this by pointing that single link to a page that holds all your other links.",
    tips: [
      "Use it for your website, store, videos and contact details",
      "Update the page whenever something new launches",
      "Your profile link never has to change",
    ],
  },
  {
    tag: "Writing",
    title: "Writing a bio that works",
    text: "Visitors decide in a few seconds whether to stay. A short, clear bio tells them who you are and why your links are worth a tap.",
    tips: [
      "Say what you do in one or two short lines",
      "Write for your audience, not for yourself",
      "Finish with a clear next step, like where to start",
    ],
  },
  {
    tag: "Organizing",
    title: "Choosing and ordering your links",
    text: "A focused page gets more attention than a crowded one. Decide what matters most right now and let everything else support it.",
    tips: [
      "Put your most important link first",
      "Keep the list short and remove links that are out of date",
      "Use clear labels that say what the visitor will find",
    ],
  },
  {
    tag: "Sharing",
    title: "Sharing your link everywhere",
    text: "Your LinkBranch URL is only useful when people can find it. Add it to every place your audience already visits you.",
    tips: [
      "Add it to your Instagram, TikTok, Twitter and YouTube profiles",
      "Include it in email signatures and video descriptions",
      "Mention it in your posts so people know it is there",
    ],
  },
  {
    tag: "Offline",
    title: "Using your QR code",
    text: "A QR code lets people open your page by pointing a phone camera at it, which makes it a natural bridge from the real world to your link in bio.",
    tips: [
      "Place it on flyers, posters, cards and packaging",
      "Print it large enough to scan comfortably",
      "Add a short line telling people what they will find",
    ],
  },
  {
    tag: "Growing",
    title: "Learning from your audience",
    text: "Looking at how people respond helps you improve over time. Small, regular changes usually beat big occasional redesigns.",
    tips: [
      "Notice which links get the most attention",
      "Move popular links higher and retire unused ones",
      "Change one thing at a time so you can see what worked",
    ],
  },
];

const glossary = [
  {
    term: "Link in bio",
    meaning: "A single link in your social profile that leads to a page containing all your other links.",
  },
  {
    term: "Handle",
    meaning: "The unique name you choose for your page. It becomes the end of your LinkBranch URL.",
  },
  {
    term: "URL",
    meaning: "The web address of your page, which you can share anywhere online.",
  },
  {
    term: "QR code",
    meaning: "A scannable square image that opens your page when a phone camera points at it.",
  },
  {
    term: "Call to action",
    meaning: "A short instruction that tells visitors what to do next, such as watch, shop or book.",
  },
  {
    term: "Engagement",
    meaning: "How much your audience interacts with your content and your links.",
  },
];

function GuideCard({ tag, title, text, tips }) {
  return (
    <article className="bg-white rounded-2xl p-8 flex flex-col gap-4">
      <span className="text-sm font-bold text-[#254F1A]">{tag}</span>
      <h3 className="text-2xl font-extrabold text-[#1E2330]">{title}</h3>
      <p className="text-base text-[#1E2330]">{text}</p>
      <ul className="flex flex-col gap-2 text-[#254F1A] font-medium mt-auto pt-2">
        {tips.map((tip) => (
          <li key={tip} className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function LearnPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#D2E823] px-6 sm:px-10 pt-45 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#254F1A] font-extrabold max-w-4xl">
            Learn how to make your link in bio work harder.
          </h1>
          <p className="text-lg text-[#254F1A] max-w-2xl">
            Short, practical guides on writing your bio, organizing your links and sharing your page, whether you are just starting out or fine-tuning what you already have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/create"
              className="bg-[#254F1A] text-white py-4 px-6 rounded-4xl hover:bg-[#26511B] focus:outline-none font-bold text-center"
            >
              Get started for free
            </Link>
            <Link
              href="#guides"
              className="border-2 border-[#254F1A] text-[#254F1A] py-4 px-6 rounded-4xl hover:bg-[#254F1A] hover:text-white focus:outline-none font-bold text-center transition-colors"
            >
              Start learning
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="bg-[#E8EFD6] px-6 sm:px-10 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl text-[#1E2330] font-extrabold">
              Six guides to get you started
            </h2>
            <p className="text-lg text-black">
              Each guide covers one idea and ends with a few tips you can apply to your page right away.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard key={guide.title} {...guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="bg-[#2665D6] px-6 sm:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <h2 className="text-4xl md:text-5xl text-[#D2E823] font-extrabold max-w-3xl">
            Key terms in plain language
          </h2>
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {glossary.map((item) => (
              <div key={item.term} className="flex flex-col gap-2">
                <dt className="text-2xl font-extrabold text-white">{item.term}</dt>
                <dd className="text-lg text-white">{item.meaning}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#780016] px-6 sm:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
          <h2 className="text-4xl md:text-5xl text-[#E9C0E9] font-extrabold max-w-3xl">
            Ready to put it into practice?
          </h2>
          <p className="text-lg text-white max-w-2xl">
            Claim your handle, add your links and build your LinkBranch page today.
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
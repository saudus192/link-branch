import Link from "next/link";

export const metadata = {
    title: "Templates - LinkBranch",
    description:
        "Browse template styles for your LinkBranch page and find a look that fits your brand.",
};

const templates = [
    {
        name: "Lime Classic",
        tag: "For creators",
        text: "Bright and energetic, in the same lime and forest green as LinkBranch itself.",
        links: ["Latest video", "Shop merch", "Contact me"],
        page: "bg-[#D2E823]",
        avatar: "bg-[#254F1A]",
        handle: "text-[#254F1A]",
        button: "bg-[#254F1A] text-white",
    },
    {
        name: "Ocean Blue",
        tag: "For businesses",
        text: "A confident, trustworthy look that works well for services and small brands.",
        links: ["Our services", "Book a call", "Visit website"],
        page: "bg-[#2665D6]",
        avatar: "bg-[#D2E823]",
        handle: "text-[#D2E823]",
        button: "bg-[#D2E823] text-black",
    },
    {
        name: "Berry",
        tag: "For artists and musicians",
        text: "Deep and expressive, a good backdrop for music, art and creative portfolios.",
        links: ["New release", "Tour dates", "Listen now"],
        page: "bg-[#780016]",
        avatar: "bg-[#E9C0E9]",
        handle: "text-[#E9C0E9]",
        button: "bg-[#E9C0E9] text-black",
    },
    {
        name: "Soft Sage",
        tag: "For writers and coaches",
        text: "Calm and easy to read, ideal for newsletters, articles and courses.",
        links: ["Read my blog", "Join newsletter", "Book a session"],
        page: "bg-[#E8EFD6] border border-[#254F1A]/20",
        avatar: "bg-[#254F1A]",
        handle: "text-[#1E2330]",
        button: "bg-[#254F1A] text-white",
    },
    {
        name: "Midnight",
        tag: "For developers and designers",
        text: "A dark, focused style that puts your projects and profiles front and center.",
        links: ["Portfolio", "GitHub", "Get in touch"],
        page: "bg-[#1E2330]",
        avatar: "bg-[#D2E823]",
        handle: "text-white",
        button: "bg-[#D2E823] text-[#1E2330]",
    },
    {
        name: "Clean White",
        tag: "For a minimal look",
        text: "Simple and distraction-free, so your links do all the talking.",
        links: ["About me", "My work", "Contact"],
        page: "bg-white border border-[#254F1A]/20",
        avatar: "bg-[#254F1A]",
        handle: "text-[#1E2330]",
        button: "border-2 border-[#254F1A] text-[#254F1A]",
    },
];

const tips = [
    {
        title: "Lead with your best link",
        text: "Put the one thing you most want people to visit at the top, where nobody has to scroll to find it.",
    },
    {
        title: "Keep it short",
        text: "A handful of clear links works better than a long list. Choose the ones your audience actually needs.",
    },
    {
        title: "Match your brand",
        text: "Pick colors that feel like the rest of your profiles so visitors know they are in the right place.",
    },
];

function TemplatePreview({ template }) {
    return (
        <div
            aria-hidden="true"
            className={`${template.page} rounded-2xl h-80 p-6 flex flex-col items-center gap-3`}
        >
            <div className={`${template.avatar} w-14 h-14 rounded-full mt-2`} />
            <p className={`${template.handle} font-bold`}>@yourname</p>
            <div className="w-full flex flex-col gap-3 mt-2">
                {template.links.map((label) => (
                    <div
                        key={label}
                        className={`${template.button} w-full py-2.5 rounded-4xl text-sm font-bold text-center`}
                    >
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}

function TemplateCard({ template }) {
    return (
        <article className="bg-white rounded-2xl p-5 flex flex-col gap-4">
            <TemplatePreview template={template} />
            <div className="flex flex-col gap-2 px-1 pb-2">
                <span className="text-sm font-bold text-[#254F1A]">{template.tag}</span>
                <h3 className="text-2xl font-extrabold text-[#1E2330]">{template.name}</h3>
                <p className="text-base text-[#1E2330]">{template.text}</p>
            </div>
        </article>
    );
}

export default function TemplatesPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-[#D2E823] px-6 sm:px-10 pt-45 pb-35 md:pb-45">
                <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#254F1A] font-extrabold max-w-4xl">
                        Find a look that fits you.
                    </h1>
                    <p className="text-lg text-[#254F1A] max-w-2xl">
                        Your link in bio is often the first thing people see. Explore these template styles for inspiration, then build a LinkBranch page that feels like you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            href="/create"
                            className="bg-[#254F1A] text-white py-4 px-6 rounded-4xl hover:bg-[#26511B] focus:outline-none font-bold text-center"
                        >
                            Get started for free
                        </Link>
                        <Link
                            href="#gallery"
                            className="border-2 border-[#254F1A] text-[#254F1A] py-4 px-6 rounded-4xl hover:bg-[#254F1A] hover:text-white focus:outline-none font-bold text-center transition-colors"
                        >
                            Browse templates
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery" className="bg-[#E8EFD6] px-6 sm:px-10 py-20 md:py-28 scroll-mt-20">
                <div className="max-w-6xl mx-auto flex flex-col gap-12">
                    <div className="flex flex-col gap-4 max-w-3xl">
                        <h2 className="text-4xl md:text-5xl text-[#1E2330] font-extrabold">
                            Six styles, one simple idea
                        </h2>
                        <p className="text-lg text-black">
                            Whether you are a creator, a business or a student with a portfolio, there is a style here that suits how you want to be seen.
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {templates.map((template) => (
                            <TemplateCard key={template.name} template={template} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Tips */}
            <section className="bg-[#2665D6] px-6 sm:px-10 py-20 md:py-28">
                <div className="max-w-6xl mx-auto flex flex-col gap-12">
                    <h2 className="text-4xl md:text-5xl text-[#D2E823] font-extrabold max-w-3xl">
                        What makes a great link page
                    </h2>
                    <ol className="grid gap-8 md:grid-cols-3">
                        {tips.map((tip, index) => (
                            <li key={tip.title} className="flex flex-col gap-3">
                                <span className="text-6xl font-extrabold text-[#D2E823]">
                                    {index + 1}
                                </span>
                                <h3 className="text-2xl font-extrabold text-white">{tip.title}</h3>
                                <p className="text-lg text-white">{tip.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="bg-[#780016] px-6 sm:px-10 py-20 md:py-28">
                <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
                    <h2 className="text-4xl md:text-5xl text-[#E9C0E9] font-extrabold max-w-3xl">
                        Ready to make your page your own?
                    </h2>
                    <p className="text-lg text-white max-w-2xl">
                        Claim your handle, add your links and start shaping your LinkBranch today.
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
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastProvider } from "@/components/toast";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-link-sans",
  display: "swap",
});

export const metadata = {
  title: "Link-Branch - Branching Links for Better User Experience",
  description: "Link-Branch is a powerful link management platform that allows you to create branching links for better user experience. With Link-Branch, you can easily manage your links and provide users with personalized experiences based on their preferences and behavior.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${dmSans.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#D2E823]">
        <ToastProvider><Navbar /></ToastProvider>
        <main className="flex-1">
          <ToastProvider>{children}</ToastProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}

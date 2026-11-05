import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "RazeStore — Own a customized online shop for your electronics business",
    template: "%s | RazeStore",
  },
  description:
    "RazeStore is a customizable e-commerce website for Kenyan electronics shops. Own your storefront, admin, and reports. M-Pesa checkout available once configured and tested.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />

        <main className="flex-1 flex flex-col min-h-0 w-full">
          {children}
        </main>

        <Footer />

        <div className="fixed bottom-4 right-4 z-30 sm:bottom-6 sm:right-6">
          <WhatsAppButton
            message="Hi, I'd like to learn more about RazeStore for my business."
            variant="primary"
            label="Chat with RazeStore on WhatsApp"
            className="shadow-lg"
          />
        </div>
      </body>
    </html>
  );
}

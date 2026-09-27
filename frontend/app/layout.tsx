import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletProvider from "@/components/WalletProvider";
import { getLocale, t } from "@/lib/i18n";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: t("metadata.title"),
  description: t("metadata.description"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={getLocale()} className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#080c10] text-slate-100">
        <WalletProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}

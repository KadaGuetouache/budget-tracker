import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster as Sonner } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "Struggling to manage your money? Our free budget tracker app makes it easy to track income, expenses, and set financial goals.  Simple and user-friendly, it helps you stay on top of your finances and finally reach your savings targets. Download now and see the difference!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Sonner richColors position="bottom-right" />
          <NextTopLoader color="#ffbf00" showSpinner={false} />
          <RootProviders>
            <Navbar />
            <main className="flex-justify-center items-center h-screen">
              {children}
            </main>
          </RootProviders>
          <Toaster />
        </body>
      </html>
    </SessionWrapper>
  );
}

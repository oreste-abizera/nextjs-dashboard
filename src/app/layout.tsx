import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import AppLayout from "@/components/AppLayout";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Website visit statistics and customer data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AppLayout>{children}</AppLayout>
          <Toaster />
        </body>
      </html>
    </SessionWrapper>
  );
}

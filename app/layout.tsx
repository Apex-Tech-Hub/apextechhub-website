import type { Metadata } from "next";
import { Onest, Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsappButton";
import WhatsAppChat from "@/components/WhatsappChat";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Tech Hub",
  description: "Welcome to Largest Tech Hub in Balochistan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
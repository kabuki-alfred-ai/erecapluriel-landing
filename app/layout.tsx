import type { Metadata } from "next";
import { Sora, Inter, Crimson_Text } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ERECApluriel - Expert-comptable Sud-Ouest",
  description: "Votre expert-comptable dans tout le Sud-Ouest. 15 agences pour vous accompagner de la création à la transmission.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable} ${crimson.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
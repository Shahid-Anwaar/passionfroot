import type { Metadata } from "next";
import { DM_Sans, Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});


export const metadata = {
  title: "New Passionfroot I Where tech brands scale influencer marketing",
  description: "Meet the fastest and easiest way to do B2B creator marketing at scale. Find the right creators on all platforms, book & collaborate, pay quickly & safely - all in one place.",
  icons: {
    icon: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/63714dcf18cd9ca123a69d04_favicon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} ${nunitoSans.variable}`}
    >
      <body>
        <main className="min-h-screen font-sans">{children}</main>
      </body>
    </html>
  );
}

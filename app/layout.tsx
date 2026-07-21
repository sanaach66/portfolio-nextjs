import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL("https://devsanaa.com"),

  title: "Sana Ullah | WordPress Developer, WooCommerce Expert & AI Integration Specialist ",
  description: "Experienced WordPress Developer specializing in WooCommerce, Elementor, Bricks Builder, custom WordPress development, website optimization, bug fixing, and AI integration. Helping businesses build fast, secure, SEO-friendly, and conversion-focused websites.",
  keywords: [
  "WordPress Developer",
  "WooCommerce Developer",
  "Elementor Expert",
  "Bricks Builder",
  "WordPress Freelancer",
  "Custom WordPress Development",
  "WordPress Performance Optimization",
  "WordPress Bug Fix",
  "AI Integration WordPress",
  "Next.js Developer",
],
authors: [
  {
    name: "Sana Ullah",
    url: "https://devsanaa.com",
  },
],
creator: "Sana Ullah",
publisher: "Sana Ullah",
robots: {
  index: true,
  follow: true,
},

alternates: {
  canonical: "/",
},
openGraph: {
    title: "Sana Ullah | WordPress Developer & WooCommerce Expert",
    description:
      "Professional WordPress Developer specializing in WooCommerce, Elementor, Bricks Builder, performance optimization, AI integration, and custom WordPress development.",

    url: "https://devsanaa.com",

    siteName: "Sana Ullah Portfolio",

    images: [
      {
        url: "/og-image.jpg", // public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Sana Ullah - WordPress Developer Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },


icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/apple-touch-icon.png",
},

category: "Technology",
referrer: "origin-when-cross-origin",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      
    >
      <body className={`${font.className} h-full antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
          </Provider>
        </body>
    </html>
  );
}

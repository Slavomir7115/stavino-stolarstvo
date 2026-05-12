import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Stolárstvo Vranov - Nábytok na mieru & zasklenia",
    template: "%s | Stolárstvo Vranov",
  },
  alternates: {
    canonical: "https://www.stavino-stolarstvo.sk",
  },
  description:
    "Hľadáte poctivé stolárstvo vo Vranove a okolí? Vyrábame unikátny nábytok na mieru, moderné kuchyne a hliníkové zasklenia terás. Precízna montáž po celom Slovensku.",

  verification: {
    google: "KlEVHxDnU0RpMn7pWQtBjzqkXEHwX2iBQYjCwox7LJc",
  },

  openGraph: {
    title: "Stolárstvo Vranov - Nábytok na mieru & zasklenia",
    description:
      "Výnimočný nábytok a hliníkové zasklenia terás od Stavino. Kvalita z Vranova nad Topľou pre celé Slovensko.",
    url: "https://www.stavino-stolarstvo.sk",
    siteName: "Stavino",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Stavino Logo",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stolárstvo Vranov - Nábytok na mieru & zasklenia",
    description: "Výnimočný nábytok a hliníkové zasklenia terás od Stavino.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sk"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <Script
          strategy="beforeInteractive"
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/cbcf12ab8e60fe8036726685cfdcea3c/script.js"
        ></Script>
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

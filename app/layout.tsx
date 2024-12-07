import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Copyright from "@/components/copyright";
import { Toaster } from "react-hot-toast";
import Chat from "@/components/chat";

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
  title: {
    default: "The Web Architech | Web Development & Digital Marketing",
    template: "%s | The Web Architech",
  },
  description:
    "Professional website design, fullstack development, digital marketing, and custom software applications for small to medium size businesses.",
  keywords: [
    "website design",
    "fullstack development",
    "digital marketing",
    "custom software",
    "web development",
  ],
  authors: [{ name: "Jerry Doran" }],
  creator: "Jerry Doran",
  publisher: "The Web Architech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: "https://www.thewebarchitech.com/",
  //   siteName: "Your Business Name",
  //   title: "Your Business Name | Web Development & Digital Marketing",
  //   description:
  //     "Professional website design, fullstack development, digital marketing, and custom software applications for businesses of all sizes.",
  //   images: [
  //     {
  //       url: "https://www.thewebarchitech.com/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Your Business Name - Web Development & Digital Marketing",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Your Business Name | Web Development & Digital Marketing",
  //   description:
  //     "Professional website design, fullstack development, digital marketing, and custom software applications for businesses of all sizes.",
  //   images: ["https://www.thewebarchitech.com/twitter-image.jpg"],
  //   creator: "@yourtwitterhandle",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // verification: {
  //   google: "your-google-site-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   bing: "your-bing-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      lang="en"
    >
      <body className="bg-[#070815] text-white/90 transition-all">
        <Header />
        <main className="no-scrollbar overflow-x-hidden">{children}</main>
        <Chat />
        <Toaster />
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}

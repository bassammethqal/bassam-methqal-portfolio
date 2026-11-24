import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { thmanyahSans, thmanyahSerifDisplay, thmanyahSerifText } from "@/app/fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Bassam Methqal | بسام مثقال — Portfolio",
  description:
    "الموقع الشخصي لبسام مثقال - طالب نظم معلومات حاسوبية (CIS) بجامعة إقليم سبأ، مهتم بتطوير الويب والذكاء الاصطناعي وبناء الحلول الرقمية.",
  keywords: [
    "Bassam Methqal",
    "بسام مثقال",
    "نظم معلومات حاسوبية",
    "Computer Information Systems",
    "CIS",
    "جامعة إقليم سبأ",
    "تطوير الويب",
    "Web Development",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Bassam Methqal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`scroll-smooth ${thmanyahSans.variable} ${thmanyahSerifDisplay.variable} ${thmanyahSerifText.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-screen font-thmanyah">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

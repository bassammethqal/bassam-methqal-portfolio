import localFont from "next/font/local";

/**
 * إعدادات وتحميل خطوط ثمانية (Thmanyah Type System)
 * ------------------------------------------------------------
 * تم التعرف على عائلات الخطوط المتوفرة في المشروع:
 * 1. Thmanyah Sans (الخطي / العصري) - 5 أوزان (Light, Regular, Medium, Bold, Black)
 * 2. Thmanyah Serif Display (الترويسي الترويجي الفاخر) - 5 أوزان
 * 3. Thmanyah Serif Text (الترويسي للنصوص والفقرات) - 5 أوزان
 */

// عائلة Thmanyah Sans الأساسية لجميع واجهات ونصوص الموقع
export const thmanyahSans = localFont({
  src: [
    {
      path: "../../public/fonts/thmanyahsans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-thmanyah-sans",
  display: "swap",
});

// عائلة Thmanyah Serif Display للعناوين والعناصر التحريرية الفاخرة
export const thmanyahSerifDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/thmanyahserifdisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahserifdisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahserifdisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahserifdisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahserifdisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-thmanyah-serif-display",
  display: "swap",
});

// عائلة Thmanyah Serif Text للقراءات والنصوص الطويلة عند الحاجة
export const thmanyahSerifText = localFont({
  src: [
    {
      path: "../../public/fonts/thmanyahseriftext-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahseriftext-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahseriftext-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahseriftext-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahseriftext-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-thmanyah-serif-text",
  display: "swap",
});

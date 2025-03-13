import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "pc-shop",
  description: "اولین فروشگاه آزمایشی دوره مکتب 124",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazir.variable}`}
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

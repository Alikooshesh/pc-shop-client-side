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
        {/* <ReduxProvider> */}
          <header className="p-2 border-b border-black">
            <h2 className="text-indigo-600">PC Shop</h2>
          </header>
          {children}
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}

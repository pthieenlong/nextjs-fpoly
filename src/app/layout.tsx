"use client";
import type { Metadata } from "next";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import Header from "@/app/__components/Header";
import Footer from "@/app/__components/Footer";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
export const metadata: Metadata = {
  title: "Trang bán hàng của Phạm Thiên Long",
  description: "Bán tùm lum đủ thứ món trên đời",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={`antialiased`}>
          <div className="relative min-h-screen">
            <Header></Header>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </Provider>
  );
}

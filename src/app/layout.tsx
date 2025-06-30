import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/__components/Header";
import Footer from "@/__components/Footer";
import Navbar from "@/__components/Navbar";
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
});
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poppins'
})

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
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="m-auto">
          <Header></Header>
          <main className="min-h-[300] bg-emerald-100">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

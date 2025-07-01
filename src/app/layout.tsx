import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import Header from "@/app/__components/Header";
import Footer from "@/app/__components/Footer";
import Navbar from "@/app/__components/Navbar";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

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
      <body className={`antialiased`}>
        <div className="m-auto relative">
          <Header></Header>
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

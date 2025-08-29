import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";
import MenuBar from "@/widgets/menubar/MenuBar";
const titillum = Titillium_Web({
  weight: "600",
});

export const metadata: Metadata = {
  title: "Next Games",
  description: "Next Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titillum.className}`}>
        <div className="wrapper">
          <div className="sideBar">
            <MenuBar />
          </div>
          <div className="layout">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

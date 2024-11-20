import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});
const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans"
});

export const metadata: Metadata = {
  title: "Rahul Pandey",
  description: "Full Stack Web Developer",
  metadataBase: new URL("https://www.rahulpandey.tech")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${work_sans.variable}`}>
        <Menu />
        {children}
        <Footer />
        </body>
    </html>
  );
}

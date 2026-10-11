import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/inter-tight";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Renzo Studio — Animation, Digital Marketing & Hospitality Consulting",
    template: "%s · Renzo Studio",
  },
  description:
    "Renzo Studio blends animation, digital marketing, advertising and hospitality consulting to grow ambitious brands. Plus Renzo Academy — learn the craft from the studio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

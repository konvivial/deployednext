"use client";
import Announcement from "@/sections/announcement/Announcement";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import Footer from "@/sections/footer/Footer";
import Copyright from "@/sections/copyright/Copyright";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const works = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${works.className} antialiased`}>
        <Announcement />

        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}

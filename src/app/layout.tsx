import "~/styles/globals.css";

import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Gallery",
  description: "Sample Gallery built using t3",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


const TopNav: React.FC = () => {

  return (
    <nav className="flex w-full items-center justify-between border-b p-4
    text-xl font-semibold">
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  );
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}

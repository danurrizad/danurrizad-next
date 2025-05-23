import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Anton, EB_Garamond, Bebas_Neue, Exo_2 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

const garamound = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamound',
})

const neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-neue',
})

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-exo-2',
})

export const metadata: Metadata = {
  title: "Danurrizad's Portfolio",
  description: "My web-based portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.className} ${anton.variable} ${garamound.variable} ${neue.variable} ${exo2.variable} font-exo`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

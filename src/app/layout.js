import { DM_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const dmSans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const workSans = Work_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Pack Smile",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={`${dmSans.variable} ${workSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

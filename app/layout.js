import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, Bold
  variable: "--font-dm-sans", // Custom variable for Tailwind
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, Bold
  variable: "--font-jetbrains", // Custom variable for Tailwind
});

export const metadata = {
  title: "Debugging Life",
  description: "A blog exploring tech, family, and life by Lazaros Ziskos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

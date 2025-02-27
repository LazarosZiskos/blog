import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog by Lazaros",
  description: "A blog created by Lazaros Ziskos using NextJS and Sanity CMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

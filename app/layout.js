import { Montserrat, Barlow_Condensed } from "next/font/google";
import { HeaderNav, FooterNav } from "@/component";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat ",
});

const barlow = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow ",
});

export const metadata = {
  title: "Gympal | Beyond fitness, equipment and friends.",
  description: "The Gympal company Beyond fitness, equipment and friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${montserrat.variable}`}>
        <HeaderNav />
        {children}
        <FooterNav />
      </body>
    </html>
  );
}

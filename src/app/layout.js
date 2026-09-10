import {Space_Grotesk, IBM_Plex_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata = {
  title: "Kohly Akpet Fullstack Developer and Business Intelligence Analyst",
  description:
    "Portfolio of Kohly Akpet, a Business Intelligence Analyst and Fullstack Developer building data dashboards and web applications.",
};

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

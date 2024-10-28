import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Roboto } from "next/font/google";
import Footer from "../components/footer/Footer";
import NavBar from "@/components/header/NavBar";
import "./globals.css";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Listoli",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} scroll-smooth	`}>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <body className="font-roboto antialiased bg-slate-950">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

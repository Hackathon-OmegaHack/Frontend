import "@/styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} pt-20`}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

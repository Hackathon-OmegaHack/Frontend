import "@/styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Header from "@/components/header";
import { useRouter } from "next/router";
import {
  Chart as ChartJS,
  Colors,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";

const inter = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Colors
);
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader = router.pathname === "/login" ? false : true;
  console.log(router.pathname);
  const paddingTop = showHeader ? "pt-0" : "";
  return (
    <main className={`${inter.className} ${paddingTop}`}>
      {showHeader && <Header />}
      <Component {...pageProps} />
    </main>
  );
}

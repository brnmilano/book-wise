import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import "../styles/index.scss";

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  );
}

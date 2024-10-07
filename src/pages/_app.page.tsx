import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import { CommonProvider } from "../hooks/useCommon";
import Head from "next/head";
import "../styles/index.scss";

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={nunito.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href="./favicon.ico" sizes="16x16" />
      </Head>

      <SessionProvider session={session}>
        <CommonProvider>
          <Component {...pageProps} />
        </CommonProvider>
      </SessionProvider>
    </div>
  );
}

/**
 * Warning: viewport meta tags should not be used in _document.tsx <Head>.
 *
 * Adicionar <meta name="viewport"...> em pages/_document.tsx levará a resultados
 * inesperados, pois não pode ser deduplicado. A tag viewport deve ser manipulada
 * por `next/head` no arquivo `pages/_app.tsx`.
 *
 * @see https://nextjs.org/docs/messages/no-document-viewport-meta
 */

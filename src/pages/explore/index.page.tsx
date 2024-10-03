import Head from "next/head";
import Template from "../template";
import { Binoculars } from "@phosphor-icons/react";
import styles from "./styles.module.scss";

export default function Explore() {
  return (
    <Template>
      <Head>
        <title>Explore! | Book Wise</title>
        <meta property="og:title" content="Explore! | Book Wise" />

        <meta
          name="description"
          content="Aqui você pode explorar novos livros e autores."
        />

        <link rel="canonical" href="http://localhost:3000/dashboard" />
      </Head>

      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <Binoculars size={32} />

          <h1>Explorar</h1>
        </div>
      </div>
    </Template>
  );
}

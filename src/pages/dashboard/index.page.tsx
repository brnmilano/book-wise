import Head from "next/head";
import styles from "./styles.module.scss";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Início | Book Wise</title>
        <meta property="og:title" content="Início | Book Wise" />

        <meta
          name="description"
          content="Boas vindas. Verifique as avaliações mais recentes ou explore os livros disponíveis."
        />

        <link rel="canonical" href="http://localhost:3000/dashboard" />
      </Head>

      <div className={styles.container}>
        <h1>Dashboard</h1>
      </div>
    </>
  );
}

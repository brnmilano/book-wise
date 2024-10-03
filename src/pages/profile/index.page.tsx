import Head from "next/head";
import Template from "../template";
import { User } from "@phosphor-icons/react";
import styles from "./styles.module.scss";

export default function Profile() {
  return (
    <Template>
      <Head>
        <title>Seu perfil | Book Wise</title>
        <meta property="og:title" content="Seu perfil | Book Wise" />

        <meta
          name="description"
          content="Aqui você pode ver e editar suas informações de perfil."
        />

        <link rel="canonical" href="http://localhost:3000/dashboard" />
      </Head>

      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <User size={32} />

          <h1>Perfil</h1>
        </div>
      </div>
    </Template>
  );
}

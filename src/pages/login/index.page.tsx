import { Button } from "@/src/components/Button";
import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import GoogleIcon from "@/src/components/Icons/GoogleIcon";
import GitHubIcon from "@/src/components/Icons/GitHubIcon";
import VisitorIcon from "@/src/components/Icons/VisitorIcon";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login | Book Wise</title>
        <meta property="og:title" content="Login | Book Wise" />

        <meta
          name="description"
          content="Boas vindas. Faça seu login ou acesse como visitante."
        />

        <link rel="canonical" href="http://localhost:3000/login" />
      </Head>

      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Image src={Logo} alt="Logo" />
        </div>

        <div className={styles.loginWrapper}>
          <div className={styles.titleAndSubtitleWrapper}>
            <h1>Boas vindas!</h1>

            <p>Faça seu login ou acesse como visitante.</p>
          </div>

          <div className={styles.buttonsWrapper}>
            <Button
              size="medium"
              startIcon={<GoogleIcon />}
              aria-label="Entrar com Google"
            >
              Entrar com Google
            </Button>

            <Button
              size="medium"
              startIcon={<GitHubIcon />}
              aria-label="Entrar com GitHub"
            >
              Entrar com GitHub
            </Button>

            <Button
              size="medium"
              startIcon={<VisitorIcon />}
              aria-label="Entrar como visitante"
            >
              Entrar com Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

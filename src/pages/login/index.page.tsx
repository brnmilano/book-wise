import { Button } from "@/src/components/Button";
import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import GoogleIcon from "@/src/components/Icons/GoogleIcon";
import GitHubIcon from "@/src/components/Icons/GitHubIcon";
import VisitorIcon from "@/src/components/Icons/VisitorIcon";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  console.log(session);

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
              onClick={() => signIn("google")}
            >
              Entrar com Google
            </Button>

            <Button
              size="medium"
              startIcon={<GitHubIcon />}
              aria-label="Entrar com GitHub"
              onClick={() => signIn("github")}
            >
              Entrar com GitHub
            </Button>

            <Button
              size="medium"
              startIcon={<VisitorIcon />}
              aria-label="Entrar como visitante"
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Entrar como visitante
            </Button>
          </div>

          <div>
            <p>{JSON.stringify(session.data)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

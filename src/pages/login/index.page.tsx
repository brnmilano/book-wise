import { Button } from "@/src/components/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import GoogleIcon from "@/src/components/Icons/GoogleIcon";
import GitHubIcon from "@/src/components/Icons/GitHubIcon";
import VisitorIcon from "@/src/components/Icons/VisitorIcon";
import Head from "next/head";

export default function Login() {
  const router = useRouter();

  const handleConnectWithGoogle = async () => {
    await signIn("google");
  };

  const handleConnectWithGitHub = async () => {
    await signIn("github");
  };

  const handleConnectWithVisitor = async () => {
    await router.push("/dashboard");
  };

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
              onClick={handleConnectWithGoogle}
            >
              Entrar com Google
            </Button>

            <Button
              size="medium"
              startIcon={<GitHubIcon />}
              aria-label="Entrar com GitHub"
              onClick={handleConnectWithGitHub}
            >
              Entrar com GitHub
            </Button>

            <Button
              size="medium"
              startIcon={<VisitorIcon />}
              aria-label="Entrar como visitante"
              onClick={handleConnectWithVisitor}
            >
              Entrar como visitante
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

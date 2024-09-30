import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import GoogleIcon from "@/src/components/Icons/GoogleIcon";
import GitHubIcon from "@/src/components/Icons/GitHubIcon";
import VisitorIcon from "@/src/components/Icons/VisitorIcon";
import { Button } from "@/src/components/Button";

export default function Home() {
  return (
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
          <Button size="medium" startIcon={<GoogleIcon />}>
            Entrar com Google
          </Button>

          <Button size="medium" startIcon={<GitHubIcon />}>
            Entrar com GitHub
          </Button>

          <Button size="medium" startIcon={<VisitorIcon />}>
            Entrar com Google
          </Button>
        </div>
      </div>
    </div>
  );
}

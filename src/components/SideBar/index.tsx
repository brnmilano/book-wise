import { Binoculars, ChartLineUp, SignOut, User } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import clsx from "clsx";

export default function SideBar() {
  const session = useSession();
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.container}>
      <aside className={styles.aSide}>
        <div>
          <div className={styles.logoWrapper}>
            <Image src={Logo} alt="Logo" height={32} width={128} />
          </div>

          <div className={styles.linksWrapper}>
            <Link
              href="/dashboard"
              className={clsx(
                styles.link,
                currentRoute === "/dashboard" ? styles.active : ""
              )}
            >
              <ChartLineUp size={22} />
              Início
            </Link>

            <Link
              href="/explore"
              className={clsx(
                styles.link,
                currentRoute === "/explore" ? styles.active : ""
              )}
            >
              <Binoculars size={22} />
              Explorar
            </Link>

            {session.status === "authenticated" && (
              <Link
                href="/profile"
                className={clsx(
                  styles.link,
                  currentRoute === "/profile" ? styles.active : ""
                )}
              >
                <User size={22} />
                Perfil
              </Link>
            )}
          </div>
        </div>

        <div>
          <Link href="/login" className={styles.loginLink}>
            Fazer login
            <SignOut size={22} />
          </Link>
        </div>
      </aside>
    </div>
  );
}

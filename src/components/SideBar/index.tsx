import { Binoculars, ChartLineUp, SignOut, User } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";
import clsx from "clsx";
import AlternativeImage from "../../../public/logo-rocket.png";

export default function SideBar() {
  const session = useSession();
  const router = useRouter();
  const currentRoute = router.pathname;

  const userName = session.data?.user?.name;
  const formattedUserName = userName?.split(" ")[0];

  return (
    <div className={styles.container}>
      <aside className={styles.aSide}>
        <div>
          <div className={styles.logoWrapper}>
            <Image
              src={Logo}
              alt="Logo"
              height={32}
              width={128}
              quality={50}
              priority={true}
            />
          </div>

          <div className={styles.linksWrapper}>
            <div
              className={clsx(
                styles.link,
                currentRoute === "/dashboard" ? styles.active : ""
              )}
              onClick={() => router.push("/dashboard")}
            >
              <ChartLineUp size={22} />
              Início
            </div>

            <div
              className={clsx(
                styles.link,
                currentRoute === "/explore" ? styles.active : ""
              )}
              onClick={() => router.push("/explore")}
            >
              <Binoculars size={22} />
              Explorar
            </div>

            {session.status === "authenticated" && (
              <div
                className={clsx(
                  styles.link,
                  currentRoute === "/profile" ? styles.active : ""
                )}
                onClick={() => router.push("/profile")}
              >
                <User size={22} />
                Perfil
              </div>
            )}
          </div>
        </div>

        <div>
          {session.status !== "authenticated" ? (
            <div
              className={styles.loginLink}
              onClick={() => router.push("/login")}
            >
              Fazer login
              <SignOut size={22} />
            </div>
          ) : (
            <>
              <div className={styles.userInfoWrapper}>
                <div className={styles.userImageWrapper}>
                  <Image
                    src={session.data.user?.image || AlternativeImage}
                    alt="teste"
                    width={32}
                    height={32}
                  />
                </div>

                <div style={{ width: "100px" }}>
                  <div
                    className={styles.logOutLink}
                    onClick={() => router.push("/login")}
                  >
                    <p>{formattedUserName}</p>

                    <SignOut size={22} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}

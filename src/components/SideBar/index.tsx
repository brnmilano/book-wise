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

  const userImage = session.data?.user?.image;
  const userName = session.data?.user?.name;
  const formattedUserName = userName?.split(" ")[0];

  console.log(formattedUserName);

  console.log(session);
  console.log(userImage);

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
          {session.status !== "authenticated" ? (
            <Link href="/login" className={styles.loginLink}>
              Fazer login
              <SignOut size={22} />
            </Link>
          ) : (
            <>
              <div className={styles.userInfoWrapper}>
                <div className={styles.userImageWrapper}>
                  <Image
                    src={session.data.user?.image || "logo-rocket.png"}
                    alt="teste"
                    width={32}
                    height={32}
                  />
                </div>

                <div style={{ width: "100px" }}>
                  <Link href="/login" className={styles.logOutLink}>
                    {/* <p>{formattedUserName}</p> */}
                    <p>formattedUserName</p>
                    <SignOut size={22} />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}

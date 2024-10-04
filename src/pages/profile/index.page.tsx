import { User } from "@phosphor-icons/react";
import { fakeBooks } from "@/src/utils/books";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Template from "../template";
import styles from "./styles.module.scss";
import DetailedCardBook from "@/src/components/Card/DetailedCardBook";
import Image from "next/image";
import AlternativeImage from "../../../public/logo.svg";

export default function Profile() {
  const session = useSession();

  return (
    <Template>
      <Head>
        <title>Seu perfil | Book Wise</title>
        <meta property="og:title" content="Seu perfil | Book Wise" />

        <meta
          name="description"
          content="Aqui você pode ver e editar suas informações de perfil."
        />

        <link rel="canonical" href="http://localhost:3000/profile" />
      </Head>

      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <User size={32} />

          <h1>Perfil</h1>
        </div>

        <div className={styles.profileContent}>
          {/* Ultima leitura e avaliações recentes */}
          <div className={styles.recentBooks}>
            {fakeBooks.map((item, index) => (
              <DetailedCardBook
                key={`${index} ${item.title}`}
                book={item.book}
                date={item.date}
                rating={item.rating}
                title={item.title}
                authorName={item.authorName}
                description={item.description}
              />
            ))}
          </div>

          {/* Livros populares */}
          <div className={styles.userProfileWrapper}>
            <div className={styles.userImageWrapper}>
              <Image
                src={session.data?.user?.image || AlternativeImage}
                alt="teste"
                width={72}
                height={72}
              />

              <h2>{session.data?.user?.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}

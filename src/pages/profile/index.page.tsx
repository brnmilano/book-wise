import {
  BookmarkSimple,
  BookOpen,
  Books,
  User,
  UserList,
} from "@phosphor-icons/react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Template from "../template";
import styles from "./styles.module.scss";
import DetailedCardBook from "@/src/components/Card/DetailedCardBook";
import Image from "next/image";
import AlternativeImage from "../../../public/logo.svg";
import StandardCardBook from "@/src/components/Card/StandardCardBook";
import { useEffect } from "react";
import { api } from "@/src/lib/axios";

export default function Profile() {
  const session = useSession();

  const onLoadScreen = async () => {
    const response = await api.get("/users/get-user");
  };

  useEffect(() => {
    onLoadScreen();
  }, []);

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
            {/* {fakeBooks.map((item, index) => (
              <StandardCardBook
                key={`${index} ${item.title}`}
                book={item.book}
                date={item.date}
                rating={item.rating}
                title={item.title}
                authorName={item.authorName}
                description={item.description}
              />
            ))} */}
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
            </div>

            <div className={styles.nameAndSince}>
              <h2>{session.data?.user?.name}</h2>

              <span>membro desde 2019</span>
            </div>

            <div className={styles.divider} />

            <div className={styles.userBooksInfo}>
              <div className={styles.readBooks}>
                <BookOpen size={32} />

                <div>
                  <h3>3000</h3>

                  <p>Páginas lidas</p>
                </div>
              </div>

              <div className={styles.readBooks}>
                <Books size={32} />

                <div>
                  <h3>10</h3>

                  <p>Livros avaliados</p>
                </div>
              </div>

              <div className={styles.readBooks}>
                <UserList size={32} />

                <div>
                  <h3>8</h3>

                  <p>Autores lidos</p>
                </div>
              </div>

              <div className={styles.readBooks}>
                <BookmarkSimple size={32} />

                <div>
                  <h3>Computação</h3>

                  <p>Categoria mais lida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}

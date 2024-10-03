import { useSession } from "next-auth/react";
import { CaretRight, ChartLineUp } from "@phosphor-icons/react";
import { fakeBooks } from "@/src/utils/books";
import Head from "next/head";
import styles from "./styles.module.scss";
import Template from "../template";
import Link from "next/link";
import SimpleCardBook from "@/src/components/Card/SimpleCardBook";
import DetailedCardBook from "@/src/components/Card/DetailedCardBook";
import StandardCardBook from "@/src/components/Card/StandardCardBook";

export default function Dashboard() {
  const session = useSession();

  return (
    <Template>
      <Head>
        <title>Início | Book Wise</title>
        <meta property="og:title" content="Início | Book Wise" />

        <meta
          name="description"
          content="Boas vindas. Verifique as avaliações mais recentes ou explore os livros disponíveis."
        />

        <link rel="canonical" href="http://localhost:3000/dashboard" />
      </Head>

      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <ChartLineUp size={32} />

          <h1>Dashboard</h1>
        </div>

        <div className={styles.dashboardContent}>
          {/* Ultima leitura e avaliações recentes */}
          <div className={styles.readingAndEvaluationWrapper}>
            {session.status !== "authenticated" ? (
              <>
                <div className={styles.subtitleWrapper}>
                  <p>Sua última leitura</p>

                  <Link href="/profile" className={styles.seeAll}>
                    Ver todas
                    <CaretRight size={18} />
                  </Link>
                </div>

                {fakeBooks.map((item, index) => (
                  <StandardCardBook
                    key={`${index} ${item.title}`}
                    book={item.book}
                    date={item.date}
                    rating={item.rating}
                    title={item.title}
                    authorName={item.authorName}
                    description={item.description}
                  />
                ))}
              </>
            ) : (
              <>
                <div className={styles.subtitleWrapper}>
                  <p>Avaliações mais recentes</p>
                </div>

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
              </>
            )}
          </div>

          {/* Livros populares */}
          <div className={styles.popularBooksWrapper}>
            <div className={styles.subtitleWrapper}>
              <p>Sua última leitura</p>

              <Link href="/explore" className={styles.seeAll}>
                Ver todas
                <CaretRight size={18} />
              </Link>
            </div>

            {fakeBooks.map((item, index) => (
              <SimpleCardBook
                key={`${index} ${item.title}`}
                book={item.book}
                rating={item.rating}
                title={item.title}
                authorName={item.authorName}
              />
            ))}
          </div>
        </div>
      </div>
    </Template>
  );
}

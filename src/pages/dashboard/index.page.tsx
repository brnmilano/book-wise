import { useSession } from "next-auth/react";
import { CaretRight, ChartLineUp } from "@phosphor-icons/react";
import Head from "next/head";
import styles from "./styles.module.scss";
import Template from "../template";
import Link from "next/link";
import SimpleCardBook from "@/src/components/Card/SimpleCardBook";
import DetailedCardBook from "@/src/components/Card/DetailedCardBook";
import StandardCardBook from "@/src/components/Card/StandardCardBook";
import absoluteUrl from "next-absolute-url";
import { GetServerSideProps } from "next";
import { BookProps } from "@/src/types/books";
import { api } from "@/src/lib/axios";

interface BooksProps {
  books: BookProps[];
}

export default function Dashboard({ books }: BooksProps) {
  console.log(books);

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
                    Ver todasaa
                    <CaretRight size={18} />
                  </Link>
                </div>

                {books.map((item, index) => (
                  <StandardCardBook
                    key={`${index} ${item.id}`}
                    book={item.cover_url}
                    date={new Date()}
                    rating={4}
                    title={item.name}
                    authorName={item.author}
                    description={item.summary}
                  />
                ))}
              </>
            ) : (
              <>
                <div className={styles.subtitleWrapper}>
                  <p>Avaliações mais recentes</p>
                </div>

                {books.map((item, index) => (
                  <DetailedCardBook
                    key={`${index} ${item.id}`}
                    bookImage={item.cover_url}
                    date={new Date()}
                    rating={4}
                    title={item.name}
                    authorName={item.author}
                    description={item.summary}
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

            {books.map((item, index) => (
              <SimpleCardBook
                key={`${index} ${item.id}`}
                id={item.id}
                bookImage={item.cover_url}
                rating={3}
                name={item.name}
                author={item.author}
                categories={{
                  name: "Programação",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Template>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const { origin } = absoluteUrl(req);
  const booksPath = `${origin}/api/books`;

  try {
    const { data: books } = await api.get<BookProps>(booksPath);

    return {
      props: { books },
    };
  } catch (error) {
    console.error("Error fetching books:", error);

    return {
      props: { books: [] },
    };
  }
};

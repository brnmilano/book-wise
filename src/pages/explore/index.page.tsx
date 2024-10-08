import Head from "next/head";
import Template from "../template";
import { Binoculars } from "@phosphor-icons/react";
import styles from "./styles.module.scss";
import { Input } from "@/src/components/Input";
import { useForm } from "react-hook-form";
import Tags from "@/src/components/Tags";
import { useEffect, useState } from "react";
import SimpleCardBook from "@/src/components/Card/SimpleCardBook";
import { fakeBooks } from "@/src/utils/books";
import { api } from "@/src/lib/axios";
import { GetServerSideProps } from "next";
import { BookProps } from "@/src/types/books";
import { booksPath } from "@/src/constants/paths";
import absoluteUrl from "next-absolute-url";

interface BooksProps {
  books: BookProps[];
}

export default function Explore({ books }: BooksProps) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Template>
      <Head>
        <title>Explore! | Book Wise</title>
        <meta property="og:title" content="Explore! | Book Wise" />

        <meta
          name="description"
          content="Aqui você pode explorar novos livros e autores."
        />

        <link rel="canonical" href="http://localhost:3000/dashboard" />
      </Head>

      <div className={styles.container}>
        <div className={styles.titleAndSearchWrapper}>
          <div className={styles.title}>
            <Binoculars size={32} />

            <h1>Explorar</h1>
          </div>

          <Input
            control={control}
            errors={errors}
            registerField="searchInput"
            placeholder="Buscar livro ou autor"
          />
        </div>

        <div>
          <Tags />
        </div>

        <div className={styles.parent}>
          {books.map((book, index) => (
            <SimpleCardBook
              key={`${book.id} ${index}`}
              id={book.id}
              name={book.name}
              author={book.author}
              book={book.cover_url}
              //rating={book.rating}
            />
          ))}
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
    const { data: books } = await api.get(booksPath);

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

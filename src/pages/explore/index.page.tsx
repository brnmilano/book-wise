import Head from "next/head";
import Template from "../template";
import { Binoculars } from "@phosphor-icons/react";
import styles from "./styles.module.scss";
import { Input } from "@/src/components/Input";
import { useForm } from "react-hook-form";
import Tags from "@/src/components/Tags";
import { useState } from "react";
import SimpleCardBook from "@/src/components/Card/SimpleCardBook";
import { fakeBooks } from "@/src/utils/books";

export default function Explore() {
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
          {fakeBooks.map((book, index) => (
            <SimpleCardBook
              key={`${book.title} ${index}`}
              id={book.id}
              title={book.title}
              authorName={book.authorName}
              book={book.book}
              rating={book.rating}
            />
          ))}
        </div>
      </div>
    </Template>
  );
}

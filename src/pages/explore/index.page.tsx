import Head from "next/head";
import Template from "../template";

export default function Explore() {
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

      <div>
        <h1>Explore</h1>
      </div>
    </Template>
  );
}

import Head from "next/head";
import Template from "../template";

export default function Profile() {
  return (
    <Template>
      <Head>
        <title>Seu perfil | Book Wise</title>
        <meta property="og:title" content="Seu perfil | Book Wise" />

        <meta
          name="description"
          content="Aqui você pode ver e editar suas informações de perfil."
        />

        <link rel="canonical" href="http://localhost:3000/dashboard" />
      </Head>

      <div>
        <h1>Profile</h1>
      </div>
    </Template>
  );
}

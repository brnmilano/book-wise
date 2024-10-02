/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * @description Page Extensions - Extensões de arquivos de página
   * - page.tsx, são arquivos de páginas que são renderizados no lado do cliente.
   * @example index.page.tsx
   *
   * - api.ts, são arquivos convertidos em rotas.
   * @example hello.api.ts
   */
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],

  /**
   * Garante que os source maps sejam gerados para os arquivos JavaScript,
   * o que pode ser útil para depuração de problemas no ambiente de produção,
   * como aqueles relatados pelo Lighthouse.
   */
  productionBrowserSourceMaps: true,

  /**
   * Define padrões remotos para carregamento de imagens. Neste caso, permite
   * que imagens sejam carregadas do domínio lh3.googleusercontent.com usando
   * o protocolo HTTPS.
   *
   * @type {import('next').ImageConfig}
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * Garante que os source maps sejam gerados para os arquivos JavaScript,
   * o que pode ser útil para depuração de problemas no ambiente de produção,
   * como aqueles relatados pelo Lighthouse.
   */
  productionBrowserSourceMaps: true,

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

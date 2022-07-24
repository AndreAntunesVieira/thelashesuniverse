/** @type {import("next").NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  async redirects() {
    return [
      {
        source: '/conteudo-adulto',
        destination: '/fotos-nua',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

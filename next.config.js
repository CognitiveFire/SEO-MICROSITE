/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  async redirects() {
    return [
      {
        source: '/services/digital-marketing',
        destination: '/tjenester/digital-markedsforing',
        permanent: true,
      },
      {
        source: '/services/seo',
        destination: '/tjenester/digital-markedsforing/seo',
        permanent: true,
      },
      {
        source: '/services/sokesynlighet',
        destination: '/tjenester/digital-markedsforing/seo',
        permanent: true,
      },
      {
        source: '/services/search-visibility',
        destination: '/tjenester/digital-markedsforing/seo',
        permanent: true,
      },
      {
        source: '/services/paid-media',
        destination: '/tjenester/digital-markedsforing/betalt-media',
        permanent: true,
      },
      {
        source: '/services/betalt-anskaffelse',
        destination: '/tjenester/digital-markedsforing/betalt-media',
        permanent: true,
      },
      {
        source: '/services/paid-acquisition',
        destination: '/tjenester/digital-markedsforing/betalt-media',
        permanent: true,
      },
      {
        source: '/services/intelligence-consulting-analytics',
        destination: '/tjenester/digital-markedsforing/analyse',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
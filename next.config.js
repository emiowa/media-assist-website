const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  i18n: {
    locales: ['jp', 'en', 'es'],
    defaultLocale: 'jp',
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

module.exports = withMDX(nextConfig);
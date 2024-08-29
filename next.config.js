const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  i18n: {
    defaultLocale: 'jp',
    locales: ['jp', 'en', 'sp'],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
};

module.exports = withMDX(nextConfig);

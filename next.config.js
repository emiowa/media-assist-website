module.exports = {
  i18n: {
    defaultLocale: 'jp',
    locales: ['jp', 'en', 'sp'],
  },
};


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};
module.exports = withMDX(nextConfig);

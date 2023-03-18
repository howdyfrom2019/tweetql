/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });
    config.module.rules.push({
      test: /\.(mp3|ogg)$/i,
      loader: 'file-loader'
    })
    return config;
  }
}

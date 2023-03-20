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
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds',
          outputPath: 'static/sounds',
          name: '[name].[ext]',
          esModule: false,
        },
      }
    })
    return config;
  }
}

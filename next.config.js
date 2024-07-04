module.exports = {
  webpack: (config, {isServer}) => {
    config.resolve.alias.canvas = false
    config.resolve.alias.encoding = false

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/fonts/',
          outputPath: `${isServer ? '../' : ''}static/fonts/`,
          esModule: false,
        },
      },
    });

    return config
  },
  async redirects() {
    return [
      {
        source: '/path/to/your/local/:path*',
        destination: '/path/to/your/local/:path*',
        permanent: false,
      },
    ];
  },
};

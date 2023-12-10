module.exports = {
  webpack: (config) => {
    config.resolve.alias.canvas = false
    config.resolve.alias.encoding = false
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

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/.well-known/matrix/server',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, os: false, http: false, https: false, stream: false };

    return config;
  },
}

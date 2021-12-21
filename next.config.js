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
}

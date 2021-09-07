module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:1337']
  }
}


module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
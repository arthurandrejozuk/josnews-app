const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@art/components']);

module.exports = withPlugins([withTM], {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: 'http://localhost:8080/noticias/:path*',
        destination: 'http://localhost:8080/analises/:path*', 
      },
    ];
  },
});
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@art/components']);

module.exports = withPlugins([withTM], {
  // ...
});
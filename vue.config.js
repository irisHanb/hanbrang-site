const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.resolve(__dirname, 'dist'),
    routes: ['/education', '/experience', '/portfolio'],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    })
  })
];

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/hanbrang-site/' : '/',
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  }
};

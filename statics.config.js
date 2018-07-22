const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  root: '/',
  output: './docs',
  theme: './theme',
  source: {
    articles: './statics/articles',
  },
  themeConfig: {
    home: '/',
    sitename: 'Billgo',
    slogan: 'A WEB DEVELOPER',
    footer: '2017 YIQILAI.TECH'
  },
  htmlTemplate: './theme/index.html',
  webpackConfig(config) {
    config.resolve.alias = {
      "app": path.resolve(__dirname, "theme"),
    };
    config.externals = Object.assign({}, config.externals, {
      "react": "React",
      "react-dom": "ReactDOM",
    });
    return config;
  },

  htmlTemplateExtraData: {
    isDevelopment,
  },
};

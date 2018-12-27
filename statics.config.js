const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  root: '/',
  output: './',
  theme: './source',
  themeConfig: {
    home: '/',
    sitename: 'BILLGO',
    slogan: 'A WEB DEVELOPER',
    footer: '2017 YIQILAI.TECH'
  },
  htmlTemplate: './source/index.html',
  webpackConfig(config) {
    config.resolve.alias = {
      "app": path.resolve(__dirname, "source"),
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

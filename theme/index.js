const path = require('path');

module.exports = {
  lazyLoad: true,
  pick: {
    articles(markdownData) {
      const filename = markdownData.meta.filename;
      if (!/^statics\/articles/.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) return;
      return {
        meta: markdownData.meta,
        description: markdownData.description,
      };
    }
  },
  plugins: [
    `statics-plugin-description`,
    `statics-plugin-react?lang=jsx`,
    `statics-plugin-toc?maxDepth=2&keepElem`,
  ],
  routes: [{
    path: '/',
    component: './pages/Home',
  }],
};

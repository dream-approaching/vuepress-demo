module.exports = {
  title: 'Static Book',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [{ text: 'Guide', link: '/guide/' }],
    sidebar: 'auto'
  }
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': 'path/to/some/dir'
  //     }
  //   }
  // }
};

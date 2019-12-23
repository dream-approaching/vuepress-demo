module.exports = {
  title: 'Static Book',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ],
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

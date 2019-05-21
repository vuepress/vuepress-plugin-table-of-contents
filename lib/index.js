const path = require('path')

module.exports = {
  name: 'vuepress-plugin-table-of-contents',

  enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),
}

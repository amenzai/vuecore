// const docsLoader = require.resolve('./doc-loader.js')

module.exports = (isDev) => {
  return {
    preserveWhitepace: true, // template标签中 去除html标签里写的空格
    extractCSS: !isDev, // vue 文件中 style 标签里的样式也提取出来到单独文件
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true // 横岗转化为小驼峰
    },
    // hotReload: false, // 根据环境变量生成
    // loaders: {
    //   'docs': docsLoader // 编写组件库时，可以给每个组件编写文档
    // },
    // preLoader: {},
    // postLoader: {}
  }
}

const { sep } = require('path')

module.exports = ({ file }) => {
  // 如果使用vant rootValue为37.5
  // 如果不使用vant rootValue为75

  let rootValue =
        file.dirname.indexOf(`node_modules${sep}vant`) !== -1 ? 37.5 : 75

  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue,
        propList: ['*']
      }
    }
  }
}

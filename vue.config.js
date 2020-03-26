module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/mixins.scss";'
      }
    }
  }
}

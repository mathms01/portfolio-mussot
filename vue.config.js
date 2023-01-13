
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-mussot/'
    : '/',
    css: {
        loaderOptions: {
          sass: {
            prependData: `
              @import "@/scss/global.scss";
            `
          },
        },
      },
}

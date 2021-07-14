module.exports = {
    // publicPath: '/medhouse.github.io/'
   
        publicPath: process.env.NODE_ENV === 'production'
        ? '/medhouse.github.io/'
        : '/'
}
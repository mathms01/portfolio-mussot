
module.exports = {
  pages:{
    'home': {
      entry: './src/views/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'home' ]
    },
    'cv': {
      entry: './src/views/CV/main.js',
      template: 'public/index.html',
      title: 'CV',
      chunks: [ 'chunk-vendors', 'chunk-common', 'cv' ]
    },
    'portfolio': {
      entry: './src/views/Portfolio/main.js',
      template: 'public/index.html',
      title: 'Portfolio',
      chunks: [ 'chunk-vendors', 'chunk-common', 'portfolio' ]
    },
    'about': {
      entry: './src/views/About/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    }
  }
}

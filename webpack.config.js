const path = require('path')

module.exports = {
  entry: './main.js',
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  externals: {
    domino: 'domino'
  },
  output: {
    filename: 'bundle.js'
  }
}

if (process.env.WEBPACK_SERVE) {
  module.exports.serve = require('tram-dev-server-config')
}

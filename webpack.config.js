const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tachyons-styled.js',
    library: 'tachyonsStyled',
    libraryTarget: 'umd'
  },
  externals: [{
    'react': 'react',
    'react-dom': 'react-dom'
  }]
}

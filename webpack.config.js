const path = require('path');
module.exports = {
  mode: "development",
  entry: './src/index.js',
  
  output: {
    filename: 'zksync-web3.bundle.webpack.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

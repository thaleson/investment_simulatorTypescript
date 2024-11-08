const path = require('path');

module.exports = {
  entry: './index.ts', // aponta para o index.ts na raiz
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
  mode: 'development',
};

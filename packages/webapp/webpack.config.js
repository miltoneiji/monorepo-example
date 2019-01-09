const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
  ],
};

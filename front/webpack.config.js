const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'), // 절대경로
    clean: true,
  },
  devtool: 'source-map', // 원본 - build 파일 연결
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({ title: 'keyboard', template: './index.html', inject: 'body', favicon: './favicon.ico' }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],

  module: {
    rules: [{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }],
  },
  optimization: {
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    watchFiles: 'index.html',
  },
};

// `npx webpack` - 파일 실행

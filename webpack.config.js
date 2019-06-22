const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')        // _ 현재 폴더를 가리킴
    },
    module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
          }
      ]
    },
    plugins: [ new HtmlWebpackPlugin()]

}
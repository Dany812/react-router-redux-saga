const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,query: {
        presets:[ 'es2015', 'react', 'stage-0' ]} 
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader"
      } 
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
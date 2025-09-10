const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'auto'
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        login: 'login@http://localhost:8081/remoteEntry.js',
        tms: 'tms@http://localhost:8082/remoteEntry.js',
        epos: 'epos@http://localhost:8083/remoteEntry.js'
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};

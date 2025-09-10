const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'auto'
  },
  devServer: {
    port: 8081,
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
      name: 'login',
      filename: 'remoteEntry.js',
      exposes: {
        './LoginApp': './src/LoginApp'
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};

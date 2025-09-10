const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  devServer: {
    port: 8083,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'epos',
      filename: 'remoteEntry.js',
      exposes: {
        './EposApp': './src/App.vue'
      },
      shared: { vue: { singleton: true } }
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};

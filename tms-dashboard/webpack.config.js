const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    port: 8082,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'tms',
      filename: 'remoteEntry.js',
      exposes: {
        './TmsApp': './src/app/app.component.ts'
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        'rxjs': { singleton: true }
      }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: [
    './src/index.js',
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('css/bundle.css'),
  ],
};

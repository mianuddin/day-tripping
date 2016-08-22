import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

export default {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  devtool: 'eval',
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
        loader: 'style!css!postcss-loader!sass',
      },
    ],
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
  resolve: {
    extensions: ['', '.js', '.scss'],
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: __dirname + 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname,
    }],
  },
};

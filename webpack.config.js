const path = require('path');

module.exports = {
  entry: {
    backend: './src/backend.ts',
    frontend: './src/frontend.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
    library: {
      name: 'verifyclient',
      type: 'umd',
    },
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  mode: 'production',
  optimization: {
    minimize: false
  },
};

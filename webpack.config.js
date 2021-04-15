const path = require('path');

const baseConfig = {
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

const frontendBrowserConfig = {
  ...baseConfig,
  target: 'web',
  entry: {
    frontend: './src/frontend.ts',
  },
  output: {
    ...baseConfig.output,
    filename: '[name]-browser.js',
  },
};

const frontendBrowserMinConfig = {
  ...frontendBrowserConfig,
  output: {
    ...baseConfig.output,
    filename: '[name]-browser.min.js',
  },
  optimization: {
    minimize: true
  }
};

const frontendNodeConfig = {
  ...baseConfig,
  target: 'node',
  entry: {
    frontend: './src/frontend.ts',
  },
};

const backendNodeConfig = {
  ...baseConfig,
  target: 'node',
  entry: {
    backend: './src/backend.ts',
  },
};

module.exports = [frontendBrowserConfig, frontendBrowserMinConfig, frontendNodeConfig, backendNodeConfig];

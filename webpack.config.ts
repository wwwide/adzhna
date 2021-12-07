import { resolve } from 'path'
import { Configuration } from 'webpack'

const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default

const config: Configuration = {
  entry: {
    button: './src/components/Button',
    card: './src/components/Card',
    'check-box': './src/components/CheckBox',
    confirmation: './src/components/Confirmation',
    dialog: './src/components/Dialog',
    'error-boundary': './src/components/ErrorBoundary',
    icon: './src/components/Icon',
    input: './src/components/Input',
    pagination: './src/components/Pagination',
    theme: './src/theme',
    toast: './src/components/Toast',
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'commonjs',
    clean: true,
  },
  devtool: 'source-map',
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'styled-components': 'commonjs styled-components',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      theme: resolve(__dirname, './src/theme'),
    },
  },
  plugins: [
    new StatoscopeWebpackPlugin({
      saveTo: './dist/report-[name]-[hash].html',
      saveStatsTo: './dist/stats-[name]-[hash].json',
      watchMode: false,
      open: 'file',
      name: 'bundles',
    }),
  ],
}

export default config

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    port: 3000,
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    analytics: './analytics.js',
    styles: './styles/index.css'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@styles": path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/Rectangleli.svg'),
          to: path.resolve(__dirname, 'dist/assets/Rectangleli.svg')
        },
        {
          from: path.resolve(__dirname, 'src/assets/IMAGEthedark.png'),
          to: path.resolve(__dirname, 'dist/assets/IMAGEthedark.png')
        }
      ],
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].chunk.css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      scriptLoading: 'defer'
    })

  ],

  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
}
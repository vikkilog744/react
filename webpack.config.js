const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EmitHtmlWebpackPlugin = require("./src/emitHtmlWebpackPlugin");

// template.html generate ./public/index.html
module.exports = {
  mode: "production",
  entry: {
    main: "./src/template.html"
  },
  output: {
    path: path.resolve(__dirname, "./public"),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          }, 
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ]
      }
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: "[name].min.css",
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
    }),
    new EmitHtmlWebpackPlugin(),
  ],
};
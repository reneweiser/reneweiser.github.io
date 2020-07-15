const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: "file-loader",
        options: {
          name: "./images/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "reneweiser",
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
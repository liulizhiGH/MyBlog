const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 提取各个css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩css文件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 压缩js文件
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    vendor: "./src/index.js",
  },
  mode: "production",
  optimization: {
    // 需要同时配置css压缩和js压缩
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        include: [path.resolve(__dirname, "./src")],
      },
      {
        test: /.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
        include: [
          path.resolve(__dirname, "./src"),
          path.resolve(__dirname, "./node_modules/antd/dist/antd.less"),
        ],
      },
      {
        test: /.js$/,
        use: {
          loader: "babel-loader",
        },
        include: [path.resolve(__dirname, "./src")],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      title: "Title",
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  output: {
    // 使用chunkhash
    filename: "[name].[chunkhash].bundle.js",
    chunkFilename: "chunk.[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
};

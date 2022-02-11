const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 开发环境，不配置任何压缩，任何hash

module.exports = {
  entry: {
    vendor: "./src/index.js",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".js", "jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                // 只对文件名后缀是module的文件，进行模块化处理
                auto: /\.module\.\w+$/i,
              },
            },
          },
        ],
        include: [path.resolve(__dirname, "./src")],
      },
      {
        test: /.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 只对文件名后缀是module的文件，进行模块化处理
              modules: {
                auto: /\.module\.\w+$/i,
              },
            },
          },
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
    new HTMLWebpackPlugin({
      title: "Title",
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    chunkFilename: (pathData) => {
      return pathData.chunk.name === "main" ? "[name].js" : "[name]/[name].js";
    },
    path: path.resolve(__dirname, "dist"),
  },
};

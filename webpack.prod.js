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
    entry: "./src/index.js",
  },
  mode: "production",
  optimization: {
    // 需要同时配置css压缩和js压缩
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // 去除所有的console.log
            pure_funcs: ["console.log"],
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
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
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                // 只对文件名后缀是module的文件，进行模块化处理
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
        use: [
          { loader: "thread-loader" },
          {
            loader: "babel-loader",
          },
        ],
        include: [path.resolve(__dirname, "./src")],
      },
      // 使用wp5自带的asset模块替代url、file、raw等loader
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset",
        generator: {
          filename: "images/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /\.(eot|ttf|otf|woff2?)$/i,
        type: "asset",
        generator: {
          filename: "fonts/[name].[contenthash:8][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 使用contenthash
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[id].[contenthash:8].css",
    }),
    new HTMLWebpackPlugin({
      title: "Title",
      template: path.resolve(__dirname, "./public/index.html"),
      favicon: path.resolve(__dirname, "./public/favicon.ico"),
    }),
  ],
  output: {
    // 使用chunkhash
    filename: "js/[name].[chunkhash:8].bundle.js",
    chunkFilename: "js/chunk.[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // 写好此路径，防止（开发or生产）服务器找不到打包出来的文件，“/”代表web服务器的根目录
  },
};

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 开发环境，不配置任何压缩，任何hash,不提取任何css文件

module.exports = {
  entry: {
    entry: "./src/index.js",
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
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         name: "./images/[name]_[hash].[ext]",
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
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
    new HTMLWebpackPlugin({
      title: "Title",
      template: path.resolve(__dirname, "./public/index.html"),
      favicon: path.resolve(__dirname, "./public/favicon.ico"),
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "chunk.[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // 写好此路径，防止（开发or生产）服务器找不到打包出来的文件，“/”代表web服务器的根目录
  },
};

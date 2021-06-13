const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.export = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: __dirname + "./src/vendor",
    filename: "bundle.js",
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: "./src/",
        use: {
          loader: ["babel-loader"],
        },
      },
      {
        test: /(\.html)$/,
        use: "html-loader",
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html",
    }),
  ],
};

const path = require("path");
const Visualizer = require("webpack-visualizer-plugin");

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  mode: "production",
  entry: [path.join(CURRENT_WORKING_DIR, "/client/main.js")],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist/web/"),
    filename: "bundle.js",
    publicPath: "/dist/web/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },

  plugins: [new Visualizer({ filename: "./statistics.html" })],
};

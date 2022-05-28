const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode:'development',
  entry: {
    bundle:path.resolve(__dirname, "src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
    
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'demos-portal',
      filename: 'index.html',
      template: 'src/template.html',
    })
  ]
};
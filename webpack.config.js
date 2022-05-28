const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode:'development',
  entry: {
    bundle:path.resolve(__dirname, "src/app.js"),
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean:true,
    assetModuleFilename: '[name][ext]'
  },
devtool: 'source-map',
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },{
        test:/\.(png|svg|jpg|jpeg|gif)$/i,
        type:'asset/resource'
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'demos-portal',
      filename: 'index.html',
      template: 'src/template.html',
    }),
    new BundleAnalyzerPlugin(),
  ]
};
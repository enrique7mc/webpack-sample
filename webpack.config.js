const path = require("path")
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: {
		vendor: ["react", "react-dom"],
    app: "./src/index.js",
    contact: "./src/contact.js"
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["env", "stage-1", "react"]
        }
      }
    }, {
      test: /\.css$/,
      use: [
        {loader: "style-loader"},
        {loader: "css-loader"}
      ]
    }, {
      test: /\.scss$/,
      use: [
        {loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "sass-loader"}
      ]
    }, {
      test: /\.jpg$/,
      use: [
        {loader: "url-loader"}
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}
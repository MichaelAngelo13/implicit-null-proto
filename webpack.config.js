const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/client/index.html",
    }),
  ],

  devServer: {
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     */
    proxy: {
      "/db/**": {
        target: "http://localhost:3000/",
        secure: false,
      },
      "/api/**": {
        target: "http://localhost:3000/",
        secure: false,
      },
      "/assets/**": {
        target: "http://localhost:3000/",
        secure: false,
      },
    },
    // this allows my react-router-dom routes to work
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?/, // using regex, regular expressions
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        exclude: /node_modules/,
      },
      // TODO: figure the resolving of relative paths of assets; below are two loaders for img resolution; html/url-loader
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: "html-loader",
      //   },
      // },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  // need a resolve here? loll
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

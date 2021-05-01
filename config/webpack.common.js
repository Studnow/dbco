const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/",
};

const PAGES_DIR = `${PATHS.src}/pages`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((filename) => filename.endsWith(".pug")); // Для html без pug оставить .html

module.exports = {
  entry: {
    app: PATHS.src,
  },

  output: {
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    path: PATHS.dist,
    clean: true,
    publicPath: "/",
  },

  optimization: {
    usedExports: true,
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.pug$/i,
        use: ["pug-loader"], // 'pug-plain-loader'
      },
      {
        test: /\.m?js$/,
        include: PATHS.src,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.vue$/i,
        loader: "vue-loader",
        options: {
          loader: {
            loader: {
              sass: "vue-style-loader!css-loader!style-loader",
            },
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: `${PATHS.assets}img/[name][hash][ext]`,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: `${PATHS.assets}fonts/[name][hash][ext]`,
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.js",
    },
  },
  plugins: [
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, ".html")}`, // Для html без pug оставить просто ${page}
        })
    ),
    new VueLoaderPlugin(),
  ],
};

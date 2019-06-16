const path = require(`path`);
const {DefinePlugin} = require(`webpack`);

const IS_DEV = JSON.stringify(process.env.NODE_ENV === `developement`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`) // eslint-disable-line
  },
  devServer: {
    contentBase: path.join(__dirname, `public`), // eslint-disable-line
    compress: false,
    port: 1337,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  plugins: [
    new DefinePlugin({
      IS_DEV,
    })
  ]
};

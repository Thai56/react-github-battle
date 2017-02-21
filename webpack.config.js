var HtmlWebpackPlugin = require('html-webpack-plugin');
//webpack is going to take our code an run it through the 'loaders' transformation
//output it to /dist/index_bundle.js
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject:'body'
})
module.exports = {
  entry : [
    './app/index.js'
  ],
  output : {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module : {
    loaders : [
      // tell webpack what kind a transofrmations it should make on our code
      //using .babelrc
      {test: /\.js$/, include: __dirname + '/app', loader: 'babel-loader' },
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  plugins :[HtmlWebpackPluginConfig]
}

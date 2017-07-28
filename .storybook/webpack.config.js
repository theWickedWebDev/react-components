const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(otf|ttf|eot|woff(2)?)$/,
        loader: 'file-loader',
        query: { name: 'font/[name]-[hash:8].[ext]'},
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        loader: 'file-loader',
        query: { name: 'img/[name]-[hash:8].[ext]'},
      },
    ]
  }
}

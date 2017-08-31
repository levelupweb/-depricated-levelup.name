const webpack = require('webpack')

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    )
    config.module.rules.push({
      test: /\.css$/,
      loader: 'emit-file-loader',
      options: {
          name: 'dist/[path][name].[ext]',
      },
    }, {
      test: /\.css$/,
      loader: `babel-loader!next-style-loader!css-loader?sourceMap&minimize=${!dev}&url=false`,
    }
  );
    return config
  }
}

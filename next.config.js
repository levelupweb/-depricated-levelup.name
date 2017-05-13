const webpack = require('webpack')

module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
                'masonry': 'masonry-layout',
                'isotope': 'isotope-laylout'
            })
        )

        config.resolve.alias = {
              'masonry': 'masonry-layout',
              'isotope': 'isotope-layout'
        }

        return config
    }
}

'use strict'

process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const merge = require('webpack-merge')

const webpackConfig_prod = merge(webpackConfig, {
  mode: 'production',
})

webpack(webpackConfig_prod, (err, stats) => {
	
	process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // if you are using ts-loader, setting this to true will make tyescript errors show up during build
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }    

})
/* 
 * Copyright 2018-2022 F5 Inc.
 * Licensed under the MIT license, see LICENSE.md for full text.
 */

var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var WebpackShellPlugin = require('webpack-shell-plugin');


var config = {
  entry: './all-tests.js',
  output: {
    filename: 'testBundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    fs: 'empty'
  },


  plugins: [
    new WebpackShellPlugin({
      onBuildExit: "mocha --colors --require spec-helper.js testBundle.js"
    })
  ]
};


module.exports = config;

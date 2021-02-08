/*
 * @Description:
 * @Author: linjia
 * @Date: 2020-03-19 11:15:46
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-02-08 01:59:34
 */
'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },

      // {
      //   enforce: 'pre',           // 在webpack编译之前进行检测
      //   test: /\.(js|jsx|vue)$/,
      //   loader: 'eslint-loader',
      //   include: [path.resolve(__dirname, '../src')], // 指定检查的目录
      //   // exclude: [                // 除去node_modules
      //   //   // path.resolve(__dirname, '../node_modules')
      //   // ],
      //   options: {
      //     fix:true,
      //     // formatter: require("eslint-config-vue")
      //   },
      // },
    ],
  },
};

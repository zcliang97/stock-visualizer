const path = require('path');
const webpack = require('webpack');

const config = function(env){
    return require(`./webpack.${env}.js`)
}

module.exports = config;
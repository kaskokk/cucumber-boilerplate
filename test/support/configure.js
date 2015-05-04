/**
 * this file generates the config attribute according
 * to current NODE_ENV
 */
var fs = require('fs'),
    path = require('path')
    merge = require('deepmerge'),
    config = require('../config.js').config,
    envConfigPath = path.join(__dirname, '..', 'config.' + process.env.NODE_ENV + '.js');

if(process.env.NODE_ENV && fs.existsSync(envConfigPath)) {
    config = merge(config, require(envConfigPath).config);
}

if(process.env.TESTS_CONFIGURATION_PATH) {
    var testsConfigPath = path.join(__dirname, '..', '..', '..', '..', process.env.TESTS_CONFIGURATION_PATH);
    if (fs.existsSync(testsConfigPath)) {
        config = merge(config, require(testsConfigPath).config);
    }
}

module.exports = config;
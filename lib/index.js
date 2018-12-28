'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var path = require('path');
var fs = require('fs');
var env = 'default';

module.exports.parseEnv = function (file) {
  file = file || path.join(process.cwd(), 'config', 'env');
  var data = fs.readFileSync(file);
  env = data.toString().trim() || 'default';
  var defaultFile = path.join(process.cwd(), 'config', 'config.default.js');
  var envFile = path.join(process.cwd(), 'config', 'config.' + env + '.js');
  var envConfig = {
    env: env,
    envFile: envFile
  };
  try {
    var config = env === 'default' ? {} : require(envFile);
    var defaultConfig = require(defaultFile);
    return _extends({}, defaultConfig, config, envConfig);
  } catch (error) {
    return envConfig;
  }
};

module.exports.env = env;
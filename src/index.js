

const path = require('path');
const fs = require('fs');
let env = 'default';

module.exports.parseEnv = function(file) {
  file = file || path.join(process.cwd(), 'config', 'env');
  const data = fs.readFileSync(file);
  env = data.toString().trim() || 'default';
  let defaultFile = path.join(process.cwd(),'config', `config.default.js`);
  let envFile = path.join(process.cwd(),'config', `config.${env}.js`);
  let envConfig = {
    env: env,
    envFile: envFile
  };
  try {
    let config = env === 'default' ? {} : require(envFile);
    let defaultConfig = require(defaultFile);
    return {...defaultConfig, ...config, ...envConfig};
  } catch (error) {
    return envConfig;
  }
};

module.exports.env = env;


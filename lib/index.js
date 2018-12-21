

const path = require('path');
const fs = require('fs');
let env = 'local';

module.exports.parseEnv = function(file) {
  file = file || path.join(process.cwd(), 'config', 'env');
  const data = fs.readFileSync(file);
  env = data.toString().trim() || 'default';
  const envFile = path.join(process.cwd(),'config', `config.${env}.js`);
  let envConfig = {
    env: env,
    envFile: envFile
  };
  try {
    let config = require(envFile);
    return {...config, ...envConfig};
  } catch (error) {
    return envConfig;
  }
};

module.exports.env = env;


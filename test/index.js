const Env = require('../lib/index');
let config = Env.parseEnv();
console.log('config: %o' , config);
console.log(Env.env)
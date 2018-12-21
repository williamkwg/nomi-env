# nomi-env

This is the environment moudle for nomi framework

## Installation

```bash
$ npm install nomi-env --save
```

Node.js >= 8.0.0  required.

## API 

#### propety
- env

#### function
- parseEnv

## Usage

``` javascript

  const Env = require('nomi-env');
  let config = Env.parseEnv();
  console.log('config: %o' , config);
  console.log(Env.env)

```

``` javascript

  const Env = require('nomi-env');
  let config = Env.parseEnv('d:app/config/env');
  console.log('config: %o' , config);
  console.log(Env.env)

```



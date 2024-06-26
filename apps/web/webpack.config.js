const webpack = require('webpack');

function getClientEnvironment() {
  const raw = Object.keys(process.env)
    .reduce((env, key) => {
      env[key] = process.env[key];
      return env;
    }, {});

  console.log(raw);

  // Stringify all values so we can feed into webpack DefinePlugin
  return {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };
}

module.exports = (config, options, context) => {
  // Overwrite the mode set by Angular if the NODE_ENV is set
  config.mode = process.env.NODE_ENV || config.mode;
  config.plugins.push(new webpack.DefinePlugin(getClientEnvironment()));
  return config;
};

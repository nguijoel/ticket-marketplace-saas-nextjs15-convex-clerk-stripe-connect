module.exports = {
    apps: [{
      name: 'pupalik-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      }
    }]
  };
  
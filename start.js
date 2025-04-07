// start.js
const { spawn } = require('child_process');

const child = spawn('node', ['node_modules/next/dist/bin/next', 'start'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'production',
    PORT: process.env.PORT || 3000,
  },
});

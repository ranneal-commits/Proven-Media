import { spawn } from 'child_process';
import http from 'http';

const server = spawn('node', ['server.ts'], {
  env: { ...process.env, NODE_ENV: 'production', PORT: '3001' }
});

server.stdout.on('data', (data) => console.log(`stdout: ${data}`));
server.stderr.on('data', (data) => console.error(`stderr: ${data}`));

setTimeout(() => {
  server.kill();
}, 2000);
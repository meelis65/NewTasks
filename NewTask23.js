const net = require('net');
const client = net.connect({port: 80, host:"google.com"}, () => {
  console.log(client.localAddress);
  client.end();
  return;
});
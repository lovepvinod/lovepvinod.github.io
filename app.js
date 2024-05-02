const express = require('express');
const http = require('http');
const fs = require('fs');

const app = express();

app.use(express.static('public')); // Serve static files from the 'public' directory

const options = {
  key: fs.readFileSync('./private_key.pem'),
  cert: fs.readFileSync('./certificate.pem')
};

const server = http.createServer(app);

server.listen(8980, '127.0.0.1',  () => {
  console.log('Server running on port');
});


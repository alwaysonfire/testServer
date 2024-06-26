const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const hostname = 'localhost';
const port = 5000;
const testRouter = require('./testRouter');

// Enable CORS for all routes
app.use(cors());





app.use('/api/test', testRouter);

// Define a route handler for the root path
app.post('/', (req, res) => {
    
  res.send(req.socket.remoteAddress);
});

app.post('/ip', (req, res) => {
  console.log(req.headers['user-agent'])
  res.send(req.socket.remoteAddress);
});


const root = path.join(__dirname, './build');
app.use(express.static(root));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
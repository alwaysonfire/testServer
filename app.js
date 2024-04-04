const express = require('express');
const app = express();
const cors = require('cors');

const hostname = 'localhost';
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Define a route handler for the root path
app.get('/', (req, res) => {
    
  res.send(req.socket.remoteAddress);
});

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
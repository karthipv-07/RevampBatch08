// Import express
const express = require('express');

// Create an Express app
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Choose a port
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


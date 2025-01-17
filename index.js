require('dotenv').config();
const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Route for homepage
app.get('/', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true';
  if (isAdmin) {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

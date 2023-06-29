require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files from the "public" directory

app.get('/api/getApiKey', (req, res) => {
  const apiKey = process.env.API_KEY;
  res.json({ apiKey });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

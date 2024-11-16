const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// API Routes
app.use('/api', itemRoutes); // `/api` is the base path for all routes in itemRoutes.js

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

/**
 * Main Server File.
 * 
 * This file sets up the Express server, middleware, and sample routes. 
 * It's the entry point to the backend API.
 * 
 */

const express = require('express');
const userController = require('./controllers/userController');

const app = express();

app.use(express.json()); // Middleware for parsing JSON requests

// Sample routes
app.get('/api/users/:id', userController.getUser);
app.post('/api/users', userController.createUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

/**
 * TODO:
 * - Implement more comprehensive API routes.
 * - Add middleware for error handling and request logging.
 * - Set up database connections and integrate with the blockchain.
 */

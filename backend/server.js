/**
 * Server File.
 * 
 * entry to backend
 * sets up the  server, middleware, and routes
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

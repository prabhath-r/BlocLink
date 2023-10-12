/**
 * User Controller.
 * 
 * This controller handles user-related operations. It currently uses an 
 * in-memory store for simplicity, but this should be replaced with 
 * persistent storage like a database.
 * 
 */

let users = [];

exports.createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        bio: req.body.bio
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

exports.getUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');
    res.json(user);
};

/**
 * TODO:
 * - Replace in-memory store with database operations.
 * - Add more user-related functionalities like update and delete.
 * - Integrate with the blockchain to fetch user details.
 */
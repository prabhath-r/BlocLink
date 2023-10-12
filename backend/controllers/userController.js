// Sample in-memory store, replace with actual database calls later
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

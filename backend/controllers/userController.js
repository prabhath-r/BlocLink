const User = require('../models/User');  // Assuming you have a User model

module.exports = {

    // Fetch user profile
    getProfile: async (req, res) => {
        try {
            const user = await User.findById(req.user.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Error fetching user profile", error });
        }
    },

    // Update user profile
    updateProfile: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.user.id, 
                req.body, 
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: "Error updating profile", error });
        }
    },

    // Delete user account
    deleteAccount: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.user.id);
            res.status(200).json({ message: "User account deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting user account", error });
        }
    }

};

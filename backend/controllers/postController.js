const Post = require('../models/Post');  // Assuming you have a Post model

module.exports = {

    // Fetch all posts for a user
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find({ userId: req.user.id });
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: "Error fetching posts", error });
        }
    },

    // Create a new post
    createPost: async (req, res) => {
        try {
            const newPost = new Post({
                userId: req.user.id,
                content: req.body.content,
                timestamp: Date.now()
            });
            await newPost.save();
            res.status(201).json(newPost);
        } catch (error) {
            res.status(500).json({ message: "Error creating post", error });
        }
    },

    // Delete a post
    deletePost: async (req, res) => {
        try {
            await Post.findByIdAndDelete(req.params.postId);
            res.status(200).json({ message: "Post deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting post", error });
        }
    }

};

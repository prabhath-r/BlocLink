const Chat = require('frontend/src/components/Chat.js');  
module.exports = {

    // Fetch all chats for a user
    getAllChats: async (req, res) => {
        try {
            const chats = await Chat.find({ userId: req.user.id });
            res.status(200).json(chats);
        } catch (error) {
            res.status(500).json({ message: "Error fetching chats", error });
        }
    },

    // Send a new chat message
    sendChat: async (req, res) => {
        try {
            const newChat = new Chat({
                userId: req.user.id,
                message: req.body.message,
                timestamp: Date.now()
            });
            await newChat.save();
            res.status(201).json(newChat);
        } catch (error) {
            res.status(500).json({ message: "Error sending chat", error });
        }
    },

    // Delete a chat message
    deleteChat: async (req, res) => {
        try {
            await Chat.findByIdAndDelete(req.params.chatId);
            res.status(200).json({ message: "Chat deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting chat", error });
        }
    }

};

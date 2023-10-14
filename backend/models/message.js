/**
 * Message Model.
 * 
 * structure of chat messge
 * no database, so the message is stored in cache
 * 
 * TODO:
 * - integrate with a database for storage.
 * - also add data validation, constraints, and relationships
 */
const messageSchema = {
    id: Number,
    senderId: Number,
    recipientId: Number,
    content: String
};

// mock
export default messageSchema;

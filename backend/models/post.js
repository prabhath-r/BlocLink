/**
 * Post Model.
 * 
 * data structure for a post
 * there is no database, so stored in cache
 * 
 * TODO:
 * - Integrate with a database for storage.
 * - Add data validation, constraints, and relationships 
 */
const postSchema = {
    id: Number,
    authorId: Number,
    content: String
};

// add database
export default postSchema; //mock

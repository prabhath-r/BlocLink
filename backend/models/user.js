/**
 * User Model.
 * 
 * user data structure. 
 * no database, stored in cache
 * 
 * TODO:
 * - Integrate with a database for persistent storage.
 * - Add data validation and constraints.
 */
const userSchema = {
    id: Number,
    name: String,
    bio: String
};

// add database
export default userSchema; //mock

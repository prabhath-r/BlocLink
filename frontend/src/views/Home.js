import React from 'react';
import Post from '../components/Post';
/**
 * Home View Component.
 * 
 * This component displays the main feed of posts. Currently, it uses 
 * sample static data, but it should be replaced with dynamic data fetched 
 * from the backend or the blockchain.
 * 
 * 
 */
function Home() {
    // Sample data, replace with API calls later
    const posts = [
        { id: 1, content: 'This is my first post!' },
        { id: 2, content: 'Blockchain is amazing!' }
    ];

    return (
        <div className="home">
            {posts.map(post => <Post key={post.id} content={post.content} />)}
        </div>
    );
}
/**
 * TODO:
 * - Implement dynamic fetching of posts.
 * - Add infinite scrolling or pagination for large numbers of posts.
 * - Enhance UI/UX for better user interaction.
 */

export default Home;

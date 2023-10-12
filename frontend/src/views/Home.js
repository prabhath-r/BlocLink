import React from 'react';
import Post from '../components/Post';

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

export default Home;

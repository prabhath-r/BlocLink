// for showing a single post

import React from 'react';
import 'frontend/src/assets/styles/post.css';

function Post({ postData }) {
    return (
        <div className="post-container">
            <div className="post-header">
                <div className="user-info">
                    <div className="user-avatar">
                        <img src={postData.user.profileImage} alt="User Avatar" />
                    </div>
                    <div className="user-name">
                        {postData.user.name}
                    </div>
                </div>
                <div className="post-timestamp">
                    {new Date(postData.timestamp).toLocaleString()}
                </div>
            </div>
            <div className="post-content">
                {postData.content}
            </div>
            <div className="post-actions">
                <button className="btn">Like</button>
                <button className="btn">Comment</button>
                <button className="btn">Share</button>
            </div>
        </div>
    );
}

export default Post;

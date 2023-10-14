import React from 'react';

/**
 * Profile Component.
 * 
 * displays user profile information.
 * fetch and display details like the username, bio, and profile picture.
 * 
 * TODO:
 * - integrate with blockchain in the backend
 * - add features to edit the profile and update user details.
 */
function Profile({ user }) {
    return (
        <div className="profile">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            {user.img}
        </div>
    );
}

export default Profile;

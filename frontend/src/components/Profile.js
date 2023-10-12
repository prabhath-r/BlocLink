import React from 'react';

/**
 * Profile Component.
 * 
 * This component displays user profile information.
 * It should fetch and display details like the username, bio, and profile picture.
 * 
 * TODO:
 * - Fetch dynamic user data from the backend or blockchain.
 * - Add features to edit the profile and update user details.
 */
function Profile({ user }) {
    return (
        <div className="profile">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            {/* Your beautiful face goes here :)*/}
        </div>
    );
}

export default Profile;

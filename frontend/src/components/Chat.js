import React from 'react';

/**
 * Chat Component.
 * 
 * This component represents an individual chat message or a chat bubble.
 * It takes the message content as a prop and displays it.
 * 
 * TODO:
 * - Implement message time-stamps and sender information.
 * - Enhance UI/UX for different message types (e.g., text, images, links).
 */
function Chat({ message }) {
    return (
        <div className="chat">
            {message}
        </div>
    );
}

export default Chat;

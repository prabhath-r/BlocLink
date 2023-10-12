pragma solidity ^0.8.0;


/**
 * Posts Contract.
 * 
 * This contract handles the creation and management of posts on the 
 * blockchain. Users can create posts, and the posts are stored in a mapping 
 * against unique IDs.
 * 
 */

contract Posts {
    struct Post {
        uint id;
        address author;
        string content;
    }

    uint public postCount = 0;
    mapping(uint => Post) public posts;

    function createPost(string memory _content) public {
        postCount++;
        posts[postCount] = Post(postCount, msg.sender, _content);
    }
}

 /**
 * TODO:
 * - Implement features like editing and deleting posts.
 * - Add mechanisms for reactions or comments on posts.
 * - Ensure data storage is optimized to reduce gas costs.
 */

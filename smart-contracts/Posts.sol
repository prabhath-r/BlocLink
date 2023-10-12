pragma solidity ^0.8.0;

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

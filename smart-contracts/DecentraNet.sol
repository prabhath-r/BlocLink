pragma solidity ^0.8.0;

contract DecentraNet {
    struct User {
        address userAddress;
        string username;
        string bio;
    }

    mapping(address => User) public users;

    function registerUser(string memory _username, string memory _bio) public {
        User memory newUser = User({
            userAddress: msg.sender,
            username: _username,
            bio: _bio
        });

        users[msg.sender] = newUser;
    }

    function getUser(address _userAddress) public view returns (User memory) {
        return users[_userAddress];
    }
}

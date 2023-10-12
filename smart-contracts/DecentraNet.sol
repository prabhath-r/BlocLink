pragma solidity ^0.8.0;

/**
 * DecentraNet Contract.
 * 
 * This contract manages user data on the blockchain. Users can register 
 * and their details are stored in a mapping against their address.
 * 
 */

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

 /**
 * TODO:
 * - Add more user-related features such as updating user details.
 * - Implement events to notify frontend applications of state changes.
 * - Add security checks and ensure gas efficiency.
 */

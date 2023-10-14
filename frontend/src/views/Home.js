import React from 'react';

function Home() {
    const sampleUser = {
        name: 'Elon Musk',
        bio: 'Alien, here to conquer',
        profileImage: 'path_to_image.jpg'
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={sampleUser.profileImage} alt="Profile" className="img-fluid rounded-circle mb-3"/>
                    <h2>{sampleUser.name}</h2>
                    <p>{sampleUser.bio}</p>
                    <button className="btn btn-primary btn-block">Edit Profile</button>
                </div>
                <div className="col-md-8">
                    <button className="btn btn-info btn-lg btn-block mb-3">Chats</button>
                    <button className="btn btn-info btn-lg btn-block mb-3">Contacts</button>
                    <button className="btn btn-info btn-lg btn-block mb-3">Status</button>
                    <button className="btn btn-success btn-lg btn-block">Add Friends</button>
                </div>
            </div>
        </div>
    );
}

export default Home;

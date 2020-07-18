import React from "react";
import Post from "../UI/post";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="profile-inner">
            <div className="profile-header">
              <div className="ph-flex">
                <div className="ph-image"></div>
              </div>
            </div>
            <div className="profile-posts">
              <Post url="https://unsplash.it/501" />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

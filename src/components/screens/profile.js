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
                <div className="ph-image">
                  <img src="http://unsplash.it/300" alt="Profile_picture" />
                </div>
                <div className="ph-content">
                  <h1>User name</h1>
                  <div className="ph-tabs">
                    <p>
                      Followers <span>99+</span>
                    </p>
                    <p>
                      Following <span>99+</span>
                    </p>
                    <p>
                      Requests <span>99+</span>
                    </p>
                  </div>
                </div>
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

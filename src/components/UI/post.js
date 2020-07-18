import React from "react";

const Post = ({ url }) => {
  return (
    <>
      <div className="post">
        <div className="card">
          <div className="post-header">
            <h3>Footer</h3>
          </div>
          <div className="post-content">
            <div className="post-image">
              <img src={url ? `${url}` : "http://unsplash.it/500"} />
            </div>
          </div>
          <div className="post-footer">
            <h3>Footer</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

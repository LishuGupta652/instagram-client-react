import React from "react";

const CreatePost = () => {
  return (
    <>
      <div className="createpost">
        <div className="container">
          <div className="createpost-inner">
            <div className="card">
              <input type="text" placeholder="title" />
              <input type="text" placeholder="body" />
              <input type="file" name="file" id="file" />
              <button type="submit">Create Post</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;

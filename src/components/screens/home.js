import React from "react";
import Post from "../UI/post";

const Home = () => {
  return (
    <div>
      <div className="home-posts">
        <Post url="https://unsplash.it/501" />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Home;

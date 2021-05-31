import React from "react";

export default function PostDetail({ post }) {
  return (
    <div className="detail">
      {/* {post.image && <img src={post.image} alt="" />} */}
      <div className="flex mr">
        <h2 className="title mr_right"> Id</h2>
        <p>1111134343242342</p>
      </div>
      <div className="flex mr">
        <h2 className="title mr_right"> Title</h2>
        <p>Title Title</p>
      </div>
      <div className="flex mr">
        <h2 className="title mr_right"> Header</h2>
        <p>Header</p>
      </div>
      <div>
        <p style={{ textAlign: "center" }}> lorem </p>
      </div>
    </div>
  );
}

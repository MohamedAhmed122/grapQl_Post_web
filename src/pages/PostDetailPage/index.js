import React, { useEffect, useState } from "react";
import PostDetail from "../../components/PostDetail";

import "./stylePages.css";

import { CommentFrom, CommentList } from "../../components/Comment";

export default function PostDetailPage({ match }) {
  return (
    <div className="flexCol" style={{ marginTop: 50 }}>
      <PostDetail />
      <div className="comment_section flexCol">
        <h2 className="title">Tell us what do you think about this Post?</h2>
        <CommentFrom />
        <CommentList />
      </div>
    </div>
  );
}

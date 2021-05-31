import React, { useEffect, useState } from "react";
import CreatePost from "../../components/PostForm";

export default function CreatePostPage() {
  const [post, setPost] = useState(null);

  return (
    <div>
      <CreatePost />
    </div>
  );
}

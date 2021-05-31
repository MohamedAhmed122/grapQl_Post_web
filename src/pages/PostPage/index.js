import React, { useEffect, useState } from "react";

import { useSnackbar } from "notistack";
import Post from "../../components/Post";


export default function PostPage() {
  return (
    <div className="flexCol" style={{ marginTop: 180 }}>
      <Post />
    </div>
  );
}

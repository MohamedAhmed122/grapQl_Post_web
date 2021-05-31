import React, { useEffect, useState } from "react";
// import { useSnackbar } from "notistack";
import SendIcon from "@material-ui/icons/Send";
import CustomInput from "../../common/CustomInput";
import { IconButton } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import DeleteIcon from "@material-ui/icons/Delete";
import "./styleComment.css";

export function CommentFrom({}) {
  const [comment, setComment] = useState("");
  //   const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex"
      style={{ margin: "10px 0" }}
    >
      <CustomInput
        icon
        placeholder="Write comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onIconClick={() => setComment("")}
      />
      <IconButton type="submit">
        <SendIcon style={{ color: "#e7c64f" }} />
      </IconButton>
    </form>
  );
}

export function CommentList({}) {
  const handleDelete = (id) => {
    console.log("");
  };
  // console.log(comment);
  return (
    <div className="comment_container">
      <p className="comment">wow what a nice comment </p>
      <div className="date">
        <Chip label="today at 3:00" variant="outlined" className="chip" />

        <IconButton
          className="icon_button"
          //   onClick={() => handleDelete(comment._id)}
        >
          <DeleteIcon style={{ color: "red" }} />
        </IconButton>
      </div>
    </div>
  );
}

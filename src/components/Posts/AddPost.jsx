import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postsApi } from "../../services/posts-API";

function AddPost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const params = useParams();

  const createPost = async () => {
    await postsApi.createPostApi(title, text, +params.id);
    await postsApi.getUserPosts(+params.id);

    setTitle("");
    setText("");
  };
  return (
    <section className="addPost">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => createPost()}>create</button>
    </section>
  );
}

export default AddPost;

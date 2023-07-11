import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsApi } from "../../services/posts-API";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../../redux/slice/slicePosts";
import AddPost from "./AddPost";
// import { useSelector } from "react-redux";

function PostsComponent() {
  const params = useParams();
  const { userPosts, isUpdateMode } = useSelector((s) => s.postsReducer);
  const { userData } = useSelector((s) => s.userReducer);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [activePostId, setActivePostId] = useState(null);
  useEffect(() => {
    postsApi.getUserPosts(+params.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(userData);

  const savePost = async (id) => {
    await postsApi.updatePost(id, title, text);
    dispatch(postsActions.isUpdatePost(false));
    setActivePostId(null);
    setText("");
    setTitle("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "text") {
      setText(value);
    }
  };
  const deletePost = async (id) => {
    await postsApi.deletePostApi(id);
    await postsApi.getUserPosts(+params.id);
  };
  const handlePostClick = (id) => {
    setActivePostId(id);
  };
  return (
    <div>
      {userData.user_id === +params.id ? <AddPost /> : null}

      {userPosts.length !== 0 && userPosts ? (
        <>
          {userPosts.map((post) => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.text}</p>
              {activePostId === post.id ? (
                <>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="text"
                    value={text}
                    onChange={handleInputChange}
                  />
                  <button onClick={() => savePost(post.id)}>Save</button>
                </>
              ) : (
                <button
                  onClick={() => handlePostClick(post.id)}
                  // onClick={() => dispatch(postsActions.isUpdatePost(true))}
                >
                  Update
                </button>
              )}
              <button onClick={() => deletePost(post.id)}>x</button>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default PostsComponent;

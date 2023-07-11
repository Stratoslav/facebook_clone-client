import { axiosConfig } from "../config/axiosConfig";
import { postsActions } from "../redux/slice/slicePosts";
import { store } from "../redux/store";

class PostsApi {
  async getUserPosts(id) {
    const { data } = await axiosConfig.get(`/posts/${id}`);
    store.dispatch(postsActions.getUserPosts(data));
  }
  async updatePost(id, title, text) {
    const { data } = await axiosConfig.put(`/posts/update`, {
      title,
      text,
      id,
    });
    store.dispatch(postsActions.updatePost(id, data));
  }
  async deletePostApi(id) {
    const { data } = await axiosConfig.delete(`/posts/delete/${id}`);
    store.dispatch(postsActions.deletePost(id, data));
  }
  async createPostApi(title, text, id) {
    const { data } = await axiosConfig.post(`/posts/create`, {
      title,
      text,
      user_id: id,
    });
    store.dispatch(postsActions.createNewPost(id, data));
  }
}

export const postsApi = new PostsApi();

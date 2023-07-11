import { axiosConfig } from "../config/axiosConfig";
import { userActions } from "../redux/slice/sliceUsers";
import { store } from "../redux/store";

class UsersApi {
  async getAllUserApi() {
    const { data } = await axiosConfig.get("http://localhost:5000/api/users");
    store.dispatch(userActions.getAllUsers(data));
  }
  async getUserApi(id) {
    const { data } = await axiosConfig.get(
      `http://localhost:5000/api/user/${id}`
    );
    store.dispatch(userActions.getUsers(data));
  }
}

export const userApi = new UsersApi();

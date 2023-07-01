import { useDispatch } from "react-redux";
import { store } from "../redux/store";
import { axiosConfig } from "../config/axiosConfig";
import { userActions } from "../redux/slice/sliceUsers";
import { registrationAction } from "../redux/slice/sliceRegistration";
class ProfileApi {
  //   dispatch = useDispatch();

  async getDataApi(id) {
    const { data } = await axiosConfig.get(`/api/user-data/${id}`);
    console.log(data);
    store.dispatch(userActions.getUserData(data));
  }
  async getProfileUserApi(id) {
    const { data } = await axiosConfig.get(`/api/user/${id}`);
    store.dispatch(registrationAction.getData(data));
  }
}

export const profileApi = new ProfileApi();

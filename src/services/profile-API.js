import { store } from "../redux/store";
import { axiosConfig } from "../config/axiosConfig";
import { userActions } from "../redux/slice/sliceUsers";
import { registrationAction } from "../redux/slice/sliceRegistration";
class ProfileApi {
  //   dispatch = useDispatch();

  async getDataApi(id) {
    const { data } = await axiosConfig.get(`/api/user-data/${id}`);

    store.dispatch(userActions.getUserData(data));
  }
  async getProfileUserApi(id) {
    const { data } = await axiosConfig.get(`/api/user/${id}`);
    store.dispatch(registrationAction.getData(data));
  }
  async setProfileDataApi(
    age,
    image,
    city,
    status_user,
    position,
    lokkingforajob,
    id
  ) {
    const { data } = await axiosConfig.post(`/api/user-data/${id}`, {
      age,
      image,
      city,
      status_user,
      position,
      lokkingforajob,
    });
    console.log(data);
    store.dispatch(userActions.setUserData(data));
  }
  async updateProfileDataApi(
    age,
    image,
    city,
    status_user,
    position,
    lokingforajob,
    id
  ) {
    const { data } = await axiosConfig.put(`/api/user-update/${id}`, {
      age,
      image,
      city,
      status_user,
      position,
      lokingforajob,
    });
    console.log(data);
    store.dispatch(userActions.updateUserData(data));
  }
  //   async updateAvatar(id, formData) {
  //     let datas = formData.get("file");
  //     console.log(datas.name);
  //     let { data } = await axiosConfig.post(`/api/user-upload/${id}`, {
  //       datas,
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     console.log("File uploaded:", data);
  //     store.dispatch(userActions.updateAvatar(data));
  //   }
}

export const profileApi = new ProfileApi();

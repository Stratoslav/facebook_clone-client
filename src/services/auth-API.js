import { axiosConfig } from "../config/axiosConfig";
import { registrationAction } from "../redux/slice/sliceRegistration";
import { store } from "../redux/store";

class AuthApi {
  async confirmLogInApi(username, password) {
    const { data } = await axiosConfig.post(
      "http://localhost:5000/auth/login",
      {
        username,
        password,
      }
    );
    store.dispatch(registrationAction.getLoginData(data));
  }
  async registrationUser(username, surname, password) {
    const { data } = await axiosConfig.post(
      "http://localhost:5000/auth/registration",
      { username, surname, password }
    );
    store.dispatch(registrationAction.getData(data));
  }
}

export const authApi = new AuthApi();

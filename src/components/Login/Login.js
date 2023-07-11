import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Login.scss";
import LoginPage from "./LoginPage";
import { authApi } from "../../services/auth-API";
function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  useDispatch();

  const loginData = useSelector((state) => state.registrationReducer.loginData);

  const confirmLogIn = async () => {
    await authApi.confirmLogInApi(username, password);
  };

  return (
    <>
      <LoginPage
        confirmLogIn={confirmLogIn}
        setUsername={setUsername}
        setPassword={setPassword}
        loginData={loginData}
      />
    </>
  );
}

export default Login;

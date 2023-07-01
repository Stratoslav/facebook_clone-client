import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registrationAction } from "../../redux/slice/sliceRegistration";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
function LoginPage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.registrationReducer.loginData);
  console.log(loginData);

  const confirmLogIn = async () => {
    const { data } = await axios.post("http://localhost:5000/auth/login", {
      username,
      password,
    });
    dispatch(registrationAction.getLoginData(data));
  };

  return (
    <section className="login">
      <h1>Login</h1>
      <div>
        <label htmlFor="username">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="userName"
            type="text"
            placeholder="username"
            name="username"
            id="username"
          />
        </label>

        <label htmlFor="password">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="password"
            type="text"
            placeholder="password"
            name="password"
            id="password"
          />
        </label>
        <button type="submit" onClick={confirmLogIn}>
          Sign in
        </button>
      </div>
      <div>
        {loginData !== undefined && loginData.message ? (
          loginData.message
        ) : (
          <div>{loginData.length !== 0 ? navigate("/") : null}</div>
        )}
      </div>
    </section>
  );
}

export default LoginPage;

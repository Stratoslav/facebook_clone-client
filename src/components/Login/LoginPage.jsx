import React from "react";

import { useNavigate } from "react-router-dom";
import "./Login.scss";
function LoginPage({ setUsername, setPassword, confirmLogIn, loginData }) {
  const navigate = useNavigate();

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

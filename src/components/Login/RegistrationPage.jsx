import React from "react";
import { useNavigate } from "react-router-dom";

function RegistrationPage({
  submitForm,
  setPassword,
  setSurname,
  setUsername,
  data,
}) {
  const navigate = useNavigate();

  return (
    <div className="registration">
      <h1>Registration</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="username">
          Username
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="userName"
            type="text"
            placeholder="username"
            name="username"
            id="username"
          />
        </label>
        <label htmlFor="surname">
          Surname
          <input
            onChange={(e) => setSurname(e.target.value)}
            className="surName"
            type="text"
            placeholder="surname"
            name="surname"
            id="surname"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="password"
            type="text"
            placeholder="password"
            name="password"
            id="password"
          />
        </label>
        <button type="submit">Sign in</button>
      </form>

      <div>
        {data !== undefined && data.message ? (
          <div>{data.message}</div>
        ) : (
          <div> {data.length !== 0 ? navigate("/") : null}</div>
        )}
      </div>
    </div>
  );
}

export default RegistrationPage;

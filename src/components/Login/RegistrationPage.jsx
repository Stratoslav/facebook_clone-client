import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registrationAction } from "../../redux/slice/sliceRegistration";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";

function RegistrationPage() {
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const data = useSelector((state) => state.registrationReducer.data);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    createUser();
    setUsername("");
    setSurname("");
    setPassword("");
  };
  const createUser = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/auth/registration",
      { username, surname, password }
    );
    dispatch(registrationAction.getData(data));
  };
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

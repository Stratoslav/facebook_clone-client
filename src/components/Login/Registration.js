import React, { useState } from "react";

import RegistrationPage from "./RegistrationPage";
import { authApi } from "../../services/auth-API";
import { useSelector } from "react-redux";

function Registration() {
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  const data = useSelector((state) => state.registrationReducer.data);

  const submitForm = (e) => {
    e.preventDefault();
    createUser();
    setUsername("");
    setSurname("");
    setPassword("");
  };
  const createUser = async () => {
    authApi.registrationUser(username, surname, password);
  };
  return (
    <>
      <RegistrationPage
        submitForm={submitForm}
        setPassword={setPassword}
        setSurname={setSurname}
        setUsername={setUsername}
        data={data}
      />
    </>
  );
}

export default Registration;

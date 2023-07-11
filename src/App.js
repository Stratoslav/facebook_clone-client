import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import Header from "./components/Header/Header";

import Profile from "./components/Profile/Profile";
import Users from "./components/Users/User";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
function App() {
  const [isRegistered, setIsRegistrated] = useState(true);
  const { data } = useSelector((state) => state.registrationReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (data.length === 0) {
      setIsRegistrated(false);
    }
  }, [data]);
  useEffect(() => {
    if (!isRegistered) {
      navigate("/registration");
    } else {
      navigate(`/${data.id}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegistered]);
  useEffect(() => {
    if (data.length !== 0) {
      navigate(`/${data.id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

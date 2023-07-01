import { useEffect, useState } from "react";
import "./App.css";
import RegistrationPage from "./components/Login/RegistrationPage";
import ProfilePage from "./components/Profile/ProfilePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import UserPage from "./components/Users/User";
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
      navigate("/");
    }
  }, [isRegistered]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;

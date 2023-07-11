import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function HeaderComponent({ data, logOut, userData }) {
  console.log(userData);
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--user-avatar", userData.image);
    //  root.style.setProperty("--user-age", userData.age.toString());
  }, [userData]);
  return (
    <header className="header">
      <div className="header__left">
        <NavLink to={`/${data.id}`}>
          <img
            className="header__avatar"
            src={
              userData.image
                ? `http://localhost:5000/${userData.image}`
                : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            }
            alt=""
          />
        </NavLink>

        {data.username ? (
          <NavLink to={`/${data.id}`}>
            <span header className="header__username">
              {data.username}
            </span>
          </NavLink>
        ) : null}

        <NavLink to="/users">
          <span header className="header__users-link">
            Users
          </span>
        </NavLink>
      </div>
      <div>
        {data.length !== 0 ? (
          <NavLink to="/login">
            <span className="header__logout-btn" onClick={logOut}>
              LogOut
            </span>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <span className="header__logout-btn" onClick={logOut}>
              LogIn
            </span>
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default HeaderComponent;

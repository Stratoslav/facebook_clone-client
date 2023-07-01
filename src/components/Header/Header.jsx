import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { registrationAction } from "../../redux/slice/sliceRegistration";
import "./Header.scss";
function Header() {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(registrationAction.logout());
  };
  const { data } = useSelector((state) => state.registrationReducer);
  return (
    <header className="header">
      <div className="header__left">
        <NavLink to="/">
          <img
            className="header__avatar"
            src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            alt=""
          />
        </NavLink>

        {data.username ? (
          <NavLink to="/">
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

export default Header;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registrationAction } from "../../redux/slice/sliceRegistration";
import "./Header.scss";
import HeaderComponent from "./HeaderComponent";

function Header() {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(registrationAction.logout());
  };
  const { data } = useSelector((state) => state.registrationReducer);
  const { userData } = useSelector((state) => state.userReducer);

  return (
    <>
      <HeaderComponent data={data} logOut={logOut} userData={userData} />
    </>
  );
}

export default Header;

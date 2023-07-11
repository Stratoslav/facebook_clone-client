import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Profile.scss";
import { profileApi } from "../../services/profile-API";
import ProfilePage from "./ProfilePage";

function Profile() {
  const { data, loginData } = useSelector((state) => state.registrationReducer);
  const { userData } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (loginData.length !== 0) {
      getProfileUser(loginData.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData]);
  useEffect(() => {
    if (data.length !== 0) {
      getUserData(data.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const getUserData = async (id) => {
    await profileApi.getDataApi(id);
  };

  const getProfileUser = async (id) => {
    await profileApi.getProfileUserApi(id);
  };
  return (
    <>
      <ProfilePage data={data} userData={userData} />
    </>
  );
}

export default Profile;

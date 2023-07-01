import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Profile.scss";
import { profileApi } from "../../services/profile-API";

function ProfilePage() {
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
    <section className="profile">
      <div className="profile__info">
        <img
          className="header__avatar"
          src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
          alt=""
        />
        {data ? (
          <div key={data.key}>
            <h1>
              {data.username} {data.surname}
            </h1>
          </div>
        ) : (
          <div>LOADING...</div>
        )}
      </div>
      <div className="profile_descr">
        <p>age: {userData.age}</p>
        <p>city: {userData.city}</p>
        <p>status: {userData.status}</p>
        <p>position: {userData.position}</p>
        <p>followers: {userData.followers}</p>
        <p>following: {userData.following}</p>
        <p>Looking for a job: {userData.lookingforajob}</p>
      </div>
      {userData === "" ? (
        <button>add data</button>
      ) : (
        <button>update data</button>
      )}
    </section>
  );
}

export default ProfilePage;

import React, { useEffect } from "react";

import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import AddDataProfile from "./EditProfile/AddDataProfile";
import { profileActions } from "../../redux/slice/sliceProfile";
import { userActions } from "../../redux/slice/sliceUsers";
import EditDataProfile from "./EditProfile/EditDataProfile";
import { useParams } from "react-router-dom";
import { userApi } from "../../services/users-API";
import Posts from "../Posts/Posts";

function ProfilePage({ data, userData }) {
  const { isEditMode } = useSelector((state) => state.profileReducer);
  const { isUpdateMode, user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);
  const updateData = () => {
    dispatch(userActions.setUpdateMode(true));
  };

  useEffect(() => {
    getSelectUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getSelectUser = async () => {
    if (params.id) {
      await userApi.getUserApi(+params.id);
    }
  };
  console.log(user);
  return (
    <>
      <section className="profile">
        {/* <form onSubmit={handleSubmit}>
        <input
          enctype="multipart/form-data"
          type="file"
          onChange={(e) => changeAvatar(e)}
        />
        <button type="submit">Set Avatar</button>
      </form> */}

        <div className="profile__info">
          {data ? (
            <div key={data.key}>
              <h1>
                {+params.id === data.id ? (
                  <>
                    {data.username} {data.surname}
                  </>
                ) : (
                  <>
                    {user.username} {user.surname}
                  </>
                )}
              </h1>
            </div>
          ) : (
            <div>LOADING...</div>
          )}
          <img
            className="profile__image"
            src={
              +params.id === data.id
                ? userData.image
                  ? `http://localhost:5000/${userData.image}`
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                : user.image
                ? `http://localhost:5000/${user.image}`
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            }
            alt=""
          />
        </div>
        <div className="profile__about">
          {!isEditMode ? (
            <div>
              {" "}
              {!isUpdateMode ? (
                <div className="profile_descr">
                  <p>age: {userData.age}</p>
                  <p>city: {userData.city}</p>
                  <p>status: {userData.status}</p>
                  <p>position: {userData.position}</p>
                  <p>followers: {userData.followers}</p>
                  <p>following: {userData.following}</p>
                  <p>
                    Looking for a job: {userData.lookingforajob ? "YES" : "NO"}
                  </p>
                </div>
              ) : (
                <EditDataProfile />
              )}
            </div>
          ) : (
            <AddDataProfile />
          )}

          {userData === "" ? (
            <div>
              {" "}
              {!isEditMode ? (
                <button
                  onClick={() => dispatch(profileActions.setEditMode(true))}
                >
                  add data
                </button>
              ) : null}{" "}
            </div>
          ) : (
            <>
              {+params.id === data.id ? (
                <button className="profile__btn" onClick={updateData}>
                  update data
                </button>
              ) : null}
            </>
          )}
        </div>
      </section>

      <Posts />
    </>
  );
}

export default ProfilePage;

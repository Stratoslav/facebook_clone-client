import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../../redux/slice/sliceProfile";
import { profileApi } from "../../../services/profile-API";

function AddDataProfile() {
  const [age, setAge] = useState(0);
  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [status_user, setStatus] = useState("");
  const [position, setPosition] = useState("");
  const [lokkingforajob, setIsFindJob] = useState(false);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.registrationReducer);
  const { userData } = useSelector((state) => state.userReducer);
  console.log(userData);
  const setProfileData = async () => {
    await profileApi.setProfileDataApi(
      age,
      image,
      city,
      status_user,
      position,
      lokkingforajob,
      data.id
    );
    dispatch(profileActions.setEditMode(false));
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          console.log(e);
        }}
      />
      <label htmlFor="age">
        Age
        <input
          type="number"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label htmlFor="city">
        City
        <input
          type="string"
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label htmlFor="status">
        Status
        <input
          type="string"
          name="status"
          onChange={(e) => setStatus(e.target.value)}
        />
      </label>
      <label htmlFor="position">
        Position
        <input
          type="string"
          name="position"
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <label htmlFor="job">
        Looking for a job?
        <input
          type="checkbox"
          name="job"
          onClick={(e) => {
            setIsFindJob(e.target.checked);
          }}
        />
      </label>
      <button onClick={setProfileData}>Save</button>
    </div>
  );
}

export default AddDataProfile;

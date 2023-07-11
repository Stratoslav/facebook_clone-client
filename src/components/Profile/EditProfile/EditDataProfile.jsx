import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileApi } from "../../../services/profile-API";
import { userActions } from "../../../redux/slice/sliceUsers";

function EditDataProfile() {
  const { data } = useSelector((state) => state.registrationReducer);
  const { userData } = useSelector((state) => state.userReducer);

  const [age, setAge] = useState(userData.age);
  const [image, setImage] = useState(null);
  const [city, setCity] = useState(userData.city);
  const [status_user, setStatus] = useState(userData.status);
  const [position, setPosition] = useState(userData.position);
  const [lookingforajob, setIsFindJob] = useState(userData.lokkingforajob);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState(null);

  const dispatch = useDispatch();

  console.log(userData);

  // const handleSubmit = (e) => {
  // e.preventDefault();

  // const formData = new FormData();
  // formData.append("file", e.target.fileInput.files[0]);
  const setProfileData = () => {
    profileApi.updateProfileDataApi(
      age,
      image,
      city,
      status_user,
      position,
      lookingforajob,
      data.id
    );
    dispatch(userActions.setUpdateMode(false));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedFile);
    const formData = new FormData();
    if (selectedFile !== null) {
      formData.append("file", selectedFile);
      // console.log(formData);
      setFormData(formData);
    }

    // Відправка formData на сервер за допомогою AJAX або fetch
    // наприклад, використовуючи fetch:
    //   fetch("/api/upload", {
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // Обробка відповіді з сервера
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       // Обробка помилок
    //       console.error(error);
    //     });
  };
  useEffect(() => {
    if (formData) {
      console.log(formData);
    }
  }, [formData]);
  return (
    <div className="profile__editForm">
      {/* <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Відправити</button>
      </form> */}

      <label htmlFor="age">
        <input
          type="number"
          name="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        Age
      </label>
      <label htmlFor="city">
        <input
          type="string"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        City
      </label>
      <label htmlFor="status">
        <input
          type="string"
          name="status"
          onChange={(e) => setStatus(e.target.value)}
          value={status_user}
        />{" "}
        Status
      </label>
      <label htmlFor="position">
        <input
          type="string"
          name="position"
          onChange={(e) => setPosition(e.target.value)}
          value={position}
        />
        Position
      </label>
      <label htmlFor="job">
        <input
          type="checkbox"
          name="job"
          onClick={(e) => {
            setIsFindJob(e.target.checked);
          }}
          value={lookingforajob}
        />
        Looking for a job?
      </label>
      <button style={{ marginRight: 0 }} onClick={() => setProfileData()}>
        Save
      </button>
    </div>
  );
}

export default EditDataProfile;

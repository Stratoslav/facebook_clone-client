import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/slice/sliceUsers";
function UserPage() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getAllUsers = async () => {
    const { data } = await axios.get("http://localhost:5000/api/users");
    dispatch(userActions.getAllUsers(data));
  };
  return (
    <section>
      {users.map((user) => (
        <div>{user.username}</div>
      ))}
    </section>
  );
}

export default UserPage;

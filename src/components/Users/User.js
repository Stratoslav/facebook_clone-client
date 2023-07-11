import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UserPage from "./UserPage";
import { userApi } from "../../services/users-API";

function Users() {
  const { users } = useSelector((state) => state.userReducer);

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getAllUsers = async () => {
    await userApi.getAllUserApi();
  };
  return (
    <>
      <UserPage users={users} />
    </>
  );
}

export default Users;

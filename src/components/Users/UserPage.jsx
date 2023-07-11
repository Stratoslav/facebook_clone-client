import React from "react";
import { NavLink } from "react-router-dom";
import "./user.scss";
function UserPage({ users }) {
  console.log(users);
  return (
    <section className="user">
      {users.map((user) => (
        <NavLink to={`/${user.id}`}>
          <div className="user__info">
            {user.username} {user.surname}
          </div>
        </NavLink>
      ))}
    </section>
  );
}

export default UserPage;

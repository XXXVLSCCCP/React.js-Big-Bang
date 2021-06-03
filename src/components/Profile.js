import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/profile/profileActions";
import { profileState } from "../store/profile/profileSelector";
import { Link } from "react-router-dom";

const Profile = () => {
  /*   const [name, setName] = useState(""); */
  const { profile } = useSelector(profileState);

  /*   const dispatch = useDispatch(); */

  /*   const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    dispatch(changeName(name));
    setName("");
  }; */

  return (
    <>
      {!!profile ? (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Hello there, {profile.name}!
        </h2>
      ) : (
        <button>
          <Link to={`/signup`}>Регистрация</Link>
        </button>
      )}
      <button>
        <Link to={`/users`}>Найти собеседника</Link>
      </button>
    </>
  );
};

export default Profile;

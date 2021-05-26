import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/profile/profileActions";
import { profileName } from "../store/profile/profileSelector";
import { Link } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const defaultName = useSelector(profileName);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    dispatch(changeName(name));
    setName("");
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Hello there, {defaultName}!
      </h2>
      <form onSubmit={handleSubmit} style={{ margin: "0 auto" }}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Your name"
        />
        <button type="submit" onClick={handleClick}>
          Change name
        </button>
        <button>
          <Link to={`/users`}>Найти собеседника</Link>
        </button>
      </form>
    </>
  );
};

export default Profile;

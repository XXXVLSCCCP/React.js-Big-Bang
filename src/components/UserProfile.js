import React, { useState } from "react";

const UserProfile = ({ userName }) => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        It's {userName} profile!
      </h2>
    </>
  );
};

export default UserProfile;

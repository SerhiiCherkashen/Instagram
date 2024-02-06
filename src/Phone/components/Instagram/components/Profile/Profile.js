import React from "react";
import profile from "./Profile.module.css";
import DataProfile from "./components/DataProfile/DataProfile";
import TopLineProfile from "./components/TopLineProfile/TopLineProfile";
import ContentProfile from "./components/ContentProfile/ContentProfile";

const Profile = () => {
  return (
    <div className={profile.profile}>
      <h1>Profile</h1>
      <TopLineProfile />
      <DataProfile />
      <ContentProfile />
    </div>
  );
};

export default Profile;

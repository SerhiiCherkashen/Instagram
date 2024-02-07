import React from "react";
import profile from "./Profile.module.css";
import DataProfile from "./components/DataProfile/DataProfile";
import TopLineProfile from "./components/TopLineProfile/TopLineProfile";
import ContentProfile from "./components/ContentProfile/ContentProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const { myAccount } = useSelector(
    (state) => state.phoneReducer.stateAccounts
  );
  return (
    <div className={profile.profile}>
      <h1>Profile</h1>
      <TopLineProfile account={myAccount} />
      <DataProfile account={myAccount} />
      <ContentProfile account={myAccount} />
    </div>
  );
};

export default Profile;

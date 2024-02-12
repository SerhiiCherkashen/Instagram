import React from "react";
import profil from "./Profile.module.css";
import DataProfile from "./components/DataProfile/DataProfile";
import TopLineProfile from "./components/TopLineProfile/TopLineProfile";
import ContentProfile from "./components/ContentProfile/ContentProfile";
import { useSelector } from "react-redux";
import PopUp from "./components/TopLineProfile/components/PopUp/PopUp";

const Profile = () => {
  const { stateAccounts } = useSelector((state) => state.phoneReducer);
  const { profile } = useSelector((state) => state.profileReducer);
  return (
    <div className={profil.profile}>
      <h1>Profile</h1>
      <TopLineProfile account={stateAccounts.myAccount} />
      <DataProfile account={stateAccounts.myAccount} />
      <ContentProfile currentAccount={stateAccounts.myAccount} />
      {profile.isOpen && <PopUp />}
    </div>
  );
};

export default Profile;

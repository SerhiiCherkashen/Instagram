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
  let indexMyAccount = stateAccounts.accounts.findIndex((element) => {
    return element.id === stateAccounts.myId;
  });
  return (
    <div className={profil.profile}>
      {/* <h1>Profile</h1> */}
      <TopLineProfile account={stateAccounts.accounts[indexMyAccount]} />
      <DataProfile account={stateAccounts.accounts[indexMyAccount]} />
      <ContentProfile currentAccount={stateAccounts.accounts[indexMyAccount]} />
      {profile.isOpen && <PopUp />}
    </div>
  );
};

export default Profile;

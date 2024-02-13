import React from "react";
import postAc from "./PostAccount.module.css";
import { stateConst } from "../../../../../../../../../BusinessLogic/State/StateConst";
import { stateAccounts } from "../../../../../../../../../BusinessLogic/State/stateAccounts";

const PostAccount = (props) => {
  const image = props.image;
  return (
    <div className={postAc.postAc}>
      <img src={`${image}`} alt={" ---hyi---"} />
      {/* <img src={stateConst.image.all.motoCrossNew} alt={" ---hyi---"} /> */}
      {/* <img src={stateAccounts.accounts[1].posts[0].poster} alt={" ---hyi---"} /> */}
    </div>
  );
};

export default PostAccount;

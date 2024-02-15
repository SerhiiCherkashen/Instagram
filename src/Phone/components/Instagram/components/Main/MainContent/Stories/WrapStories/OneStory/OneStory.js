import React from "react";
import oneStory from "./OneStory.module.css";
import { useDispatch, useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { stateConst } from "../../../../../../../../../BusinessLogic/State/StateConst";
import {
  changeCurrentAccount,
  selectStory,
} from "../../../../../../../../../BusinessLogic/Redux/PhoneSlice";
import { Link } from "react-router-dom";

const OneStory = () => {
  const dispatch = useDispatch();
  const { stateAccounts, stories } = useSelector((state) => state.phoneReducer);

  return (
    <div className={oneStory.oneStory}>
      {/* <h1>OneStory</h1> */}
      {/* <>
        <Button variant="primary">Primary</Button>
      </> */}
      {/* <img src={stateConst.image.all.motoCrossNew} /> */}
      <div className={oneStory.carousel}>
        <Carousel
          onSelect={(e) => {
            dispatch(selectStory(e));
          }}
          data-bs-theme="dark">
          {stories.map((element) => {
            let indexAccount = stateAccounts.accounts.findIndex((el) => {
              return el.id === element.id;
            });
            let testViewed = stateAccounts.accounts[
              indexAccount
            ].stories.findIndex((iter) => {
              return iter.viewed === true;
            });
            // console.log("Carousel : ", indexAccount);
            // if (testViewed !== -1) {
            return (
              <Carousel.Item>
                <div className={oneStory.wrapCarouselImg}>
                  <div className={oneStory.higherImg}>
                    <div className={oneStory.logoId}>
                      <img
                        src={stateAccounts.accounts[indexAccount].profilePhoto}
                      />
                      <div
                        onClick={() =>
                          dispatch(
                            changeCurrentAccount(
                              stateAccounts.accounts[indexAccount].id
                            )
                          )
                        }
                        className={oneStory.id}>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/account">
                          {stateAccounts.accounts[indexAccount].id}
                        </Link>
                      </div>
                    </div>
                    <div>
                      <img src={stateConst.image.instProfilePage.threeDot} />
                    </div>
                  </div>
                  <div>
                    <img
                      className="d-block w-100"
                      src={element.image}
                      alt="First slide"
                    />
                  </div>
                </div>
              </Carousel.Item>
            );
            // }
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default OneStory;
{
  /* <Carousel.Item>
<img
  className="d-block w-100"
  src={stateConst.image.all.motoCrossNew}
  alt="Second slide"
/>
<Carousel.Caption>
  <h5>Second slide label</h5>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item> */
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = ({ stories }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <Slider {...settings}>
      {stories.map((story, index) => (
        <div key={index} className="story-slide">
          {/* Ваш контент элемента, например, изображение */}
          {story}
        </div>
      ))}
    </Slider>
  );
};

export default Slick;

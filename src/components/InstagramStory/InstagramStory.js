import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const InstagramStory = ({ items }) => {
  const [index, setIndex] = useState(0);

  const props = useSpring({
    transform: `translateX(-${index * 100}%)`,
  });

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div>
      <div style={{ overflow: "hidden", position: "relative", width: "100%" }}>
        <animated.div
          style={{
            display: "flex",
            width: `${items.length * 100}%`,
            ...props,
          }}>
          {items.map((item, i) => (
            <div key={i} style={{ flex: "0 0 50%", width: "50%" }}>
              {/* Ваш контент элемента, например, изображение */}
              {item}
            </div>
          ))}
        </animated.div>
      </div>
      <button onClick={handlePrev}>Предыдущий</button>
      <button onClick={handleNext}>Следующий</button>
    </div>
  );
};

export default InstagramStory;

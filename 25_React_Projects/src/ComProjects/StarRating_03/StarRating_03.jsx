import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Styles_03.css";

function StarRating_03({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getindex) {
    setRating(getindex)
  }
  function handleEnter(getindex) {
    setHover(getindex)
  }
  function handleLeave() {
    setHover(rating)
  }

  return (
    <>
      <div className="heading">StarRating 03</div>
      <section className="sec03">
        <div className="element">
          {
            [...Array(noOfStars)].map((_, index) => {
              index += 1;
              return (
                <FaStar
                  key={index}
                  className={ index <= (hover || rating) ? 'active' : 'inactive'}
                  onClick={() => handleClick(index)}
                  onMouseMove={() => handleEnter(index)}
                  onMouseLeave={() => handleLeave()}
                  size={30}
                />
              );
            })
          }
        </div>
      </section>
    </>
  );
}

export default StarRating_03;

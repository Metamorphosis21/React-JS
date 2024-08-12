import React, { useState, useEffect } from "react";
import "./Styles_04.css";
import { Imgdata } from "./imageData.js";   // Importing an object called Imgdata from a file called imageData.js
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function ImageSlider_04() {

  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {       // Defining a useEffect hook, which runs after the component is rendered

    if(Imgdata.images === '')
      setErrorMsg(" Nelo Nada !");
    // If images array in the Imgdata objects is an empty string, set the errorMsg to " Nelo Nada !"

    setImages(Imgdata.images);
  }, [Imgdata]);    // The useEffect hook will only run when the Imgdata dependency changes

  if (loading) {
    return (
      <>
        <div className="heading">ImageSlider 04</div>
        <div>Loading Imgaes...</div>
      </>
    );
  }
  // If the loading state is true, return a loading message

  if (errorMsg !== null) return (
    <>
      <div className="heading">ImageSlider 04</div>
      <div>Error occurred !{errorMsg}</div>
    </>
  )
  // If there is an error message, return an error message

  console.log(images);
  // Log the images state to the console to check

  const handleLeftArrowClick = () => {
    setCurrentImage(currentImage - 1);  // Decrement the currentImage state

    if (currentImage - 1 < 0) {
      setCurrentImage(images.length - 1);
    }// If the currentImage state is less than 0, set it to the last index of the images array
  };

  const handleRightArrowClick = () => {
    setCurrentImage(currentImage + 1);  // Increment the currentImage state

    if (currentImage + 1 >= images.length) {
      setCurrentImage(0);
    }// If the currentImage state is greater than or equal to the length of the images array, set it to 0
  };

  return (
    <>
      <div className="heading">ImageSlider 04</div>
      <section className="sec04">
        <FaArrowAltCircleLeft className="arrow arrowleft" onClick={handleLeftArrowClick} />
        {/* // Render a left arrow icon and attach the handleLeftArrowClick function to its onClick event */}

        {
          images && images.length ? 
          <img 
            key={images[currentImage].id} 
            src={images[currentImage].url} 
            alt={images[currentImage].title} 
            className="image"
          />
          : 
          null
        }
        {/* // If the images array is not empty, render an img element with the current image's properties */}

        <FaArrowAltCircleRight className="arrow arrowright" onClick={handleRightArrowClick} />
        {/* // Render a right arrow icon and attach the handleRightArrowClick function to its onClick event */}
      </section>
    </>
  );
}

export default ImageSlider_04;
// Exporting the ImageSlider_04 component as the default export
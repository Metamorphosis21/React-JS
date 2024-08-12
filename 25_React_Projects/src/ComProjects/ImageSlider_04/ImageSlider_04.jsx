import React, { useState, useEffect } from "react";
import "./Styles_04.css";
import { Imgdata } from "./imageData.js";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function ImageSlider_04() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {     // useEfefct does not return anything

    if(Imgdata === '')
      setErrorMsg(" Nelo Nada !")

    setLoading(true);
    setImages(Imgdata.images);
    setLoading(false);
  }, [Imgdata]);

  if (loading) {
    return (
      <>
        <div className="heading">ImageSlider 04</div>
        <div>Loading Imgaes...</div>
      </>
    );
  }

  if (errorMsg !== null) return (
    <>
      <div className="heading">ImageSlider 04</div>
      <div>Error occurred !{errorMsg}</div>
    </>
  )

  console.log(images);

  const handleLeftArrowClick = () => {
    setCurrentImage(currentImage - 1);
    if (currentImage - 1 < 0) {
      setCurrentImage(images.length - 1);
    }
  };

  const handleRightArrowClick = () => {
    setCurrentImage(currentImage + 1);
    if (currentImage + 1 >= images.length) {
      setCurrentImage(0);
    }
  };

  return (
    <>
      <div className="heading">ImageSlider 04</div>
      <section className="sec04">
        <FaArrowAltCircleLeft className="arrow arrowleft" onClick={handleLeftArrowClick} />
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
        <FaArrowAltCircleRight className="arrow arrowright" onClick={handleRightArrowClick} />
      </section>
    </>
  );
}

export default ImageSlider_04;
import React, { useState } from "react";
import "./Styles_02.css";

function RandomColor_02() {
  const [colortype, setColortype] = useState("hex");
  const [bgColor, setBgcolor] = useState("#000000");

  function createRandomHEXColor() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += Math.floor(Math.random() * 10);
    }
    setBgcolor(hex);
  }
  function createRandomRGBColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setBgcolor(`rgb(${r},${g},${b})`);
  }

  return (
    <>
      <div className="heading">RandomColor 02</div>
      <section
        className="sec02"
        style={{ height: "50vh", background: bgColor }}
      >
        <div className="btcontainer">
          <button
            className="hexColor"
            onClick={() => {
              setColortype("hex");
              createRandomHEXColor();
            }}
          >
            HEX color
          </button>
          <button
            className="randomColor"
            onClick={() => {
              colortype === "hex"
                ? createRandomHEXColor()
                : createRandomRGBColor();
            }}
          >
            Random color
          </button>
          <button
            className="rgbColor"
            onClick={() => {
              setColortype("rgb");
              createRandomRGBColor();
            }}
          >
            RGB color
          </button>
        </div>
        <div className="info">
          {
            <h1>
              {colortype} color : {bgColor}
            </h1>
          }
        </div>
      </section>
    </>
  );
}

export default RandomColor_02;

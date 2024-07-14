import React, { useState } from "react";
import "./Styles_02.css";

function RandomColor_02() {
  const [colortype, setColortype] = useState("hex");
  const [bgColor, setBgcolor] = useState("#000000");

  function createRandomHEXColor() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += Math.floor(Math.random() * 16).toString(16);
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
      <div className="heading">RandomColor_02</div>
      <section
        className="rndColor"
        style={{ height: "60vh", background: bgColor }}
      >
        <div className="container">
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
            className="RgbColor"
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

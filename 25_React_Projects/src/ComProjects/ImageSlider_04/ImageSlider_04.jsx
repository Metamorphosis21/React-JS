import React from 'react'
import './Styles_04.css'
import pic1 from '../ImageSlider_04/Screenshot (7).png'
import {FaArrowAltCircleLeft}  from 'react-icons/fa'
import {FaArrowAltCircleRight}  from 'react-icons/fa'

function ImageSlider_04() {
  return (
    <>
      <div className="heading">ImageSlider 04</div>
      <section className='sec04'>
        <div className="img">
           <img src={pic1} alt="" />
        </div>
        <div className="buttons">
          <button><FaArrowAltCircleLeft/></button>
          <button><FaArrowAltCircleRight/></button>
        </div>
      </section>
    </>
  )
}

export default ImageSlider_04

import React, { useState , useEffect } from 'react'
import './Styles_04.css'
import pic1 from '../ImageSlider_04/imgSlider/Screenshot (7).png'
import {FaArrowAltCircleLeft}  from 'react-icons/fa'
import {FaArrowAltCircleRight}  from 'react-icons/fa'



function ImageSlider_04({url , limit}) {

  const [images  ,setImages] = useState([])
  const [currentImage , setCurrentImage] = useState(0)
  const [errorMsg , setErrorMsg] = useState(null)
  const [loading , setLoading] = useState(false)

  async function fetchimages(getUrl){
    try {
      setLoading(true)

      const data = (await fetch(`${getUrl}?limit=${limit}`)).json()

      if(data){
        setImages(data)
      }

    } catch (error) {
      setErrorMsg(error.message)
      setLoading(false)
    }
  }
  
  useEffect(()=> {
    if(url !== ''){
      fetchimages()
    }
  },[url])

  if(loading){
    return <div>Loading Imgaes...</div>
  }
  
  if(errorMsg !== null)
    return <div>Error occurred !{errorMsg}</div>
  
  

  console.log(images);
  

  return (
    <>
      <div className="heading">ImageSlider 04</div>
      <section className='sec04'>
        <div className="img">
           <img src={pic1} alt=""/>
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

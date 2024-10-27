
import './App.css'
import Accordian_01 from './Components/Accordian_01/Accordian_01.jsx'

import RandomColor_02 from './Components/RandomColor_02/RandomColor_02.jsx'

import StarRating_03 from './Components/StarRating_03/StarRating_03.jsx'

import ImageSlider_04 from './Components/ImageSlider_04/ImageSlider_04.jsx'

import LoadMore_05 from './Components/LoadMore_05/LoadMore_05.jsx'

import TreeUI_06 from './Components/TreeUI_06/TreeUI_06.jsx'
import {NavUI} from './Components/TreeUI_06/NavUI.js'

import QRCode_07 from './Components/QRCode_07/QRCode_07.jsx'

import Modal_10 from './Components/Modal_10/Modal_10.jsx'

import WeatherApp from './Components/WeatherApp_20/WeatherApp_20.jsx'


function App() {

  return (
    <>
      <Accordian_01/>
      <RandomColor_02/>
      <StarRating_03 noOfStars={10}/>
      <ImageSlider_04/>
      <LoadMore_05/> 
      <TreeUI_06 menus={NavUI}/> 
      <QRCode_07/>
      <Modal_10/>
      <WeatherApp/>
    </>
  )
}

export default App


import './App.css'
import Accordian_01 from './Components/Accordian_01/Accordian_01.jsx'

import ImageSlider_04 from './Components/ImageSlider_04/ImageSlider_04.jsx'

import LoadMore from './Components/LoadMore_05/LoadMore.jsx'

import RandomColor_02 from './Components/RandomColor_02/RandomColor_02.jsx'

import StarRating_03 from './Components/StarRating_03/StarRating_03.jsx'

import TreeUI from './Components/TreeUI_06/TreeUI.jsx'
import {NavUI} from './Components/TreeUI_06/NavUI.js'

import QRCode from './Components/QRCode_07/QRCode.jsx'

import WeatherApp from './Components/WeatherApp_20/WeatherApp.jsx'


function App() {

  return (
    <>
      {/* <Accordian_01/> */}
      {/* <RandomColor_02/> */}
      {/* <StarRating_03 noOfStars={10}/> */}
      {/* <ImageSlider_04/> */}
      {/* <LoadMore/>  */}
      {/* <TreeUI menus={NavUI}/>  */}
      <QRCode/>
      {/* <WeatherApp/> */}
    </>
  )
}

export default App

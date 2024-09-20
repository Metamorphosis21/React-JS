
import './App.css'
import Accordian_01 from './ComProjects/Accordian_01/Accordian_01.jsx'
import ImageSlider_04 from './ComProjects/ImageSlider_04/ImageSlider_04.jsx'
import LoadMore from './ComProjects/LoadMore_05/LoadMore.jsx'
import RandomColor_02 from './ComProjects/RandomColor_02/RandomColor_02.jsx'
import StarRating_03 from './ComProjects/StarRating_03/StarRating_03.jsx'

function App() {

  return (
    <>
      <Accordian_01/>
      <RandomColor_02/>
      <StarRating_03 noOfStars={10}/>
      <ImageSlider_04/>
      <LoadMore/>
    </>
  )
}

export default App

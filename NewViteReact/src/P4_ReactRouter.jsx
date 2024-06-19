
import Header from "./Components/Header/Header"
import Home from "./Components/HomePage/Home"
import Footer from "./Components/Footer/Footer"

export default function P4_ReactRouter() {
  return (
    <h1 className="text-3xl font-bold italic bg-red-600 text-center p-5 text-blue-100 ">
      <Header/>
      <Home/>
      <Footer/>
    </h1>
  )
}
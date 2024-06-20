import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/HomePage/Home'
import AboutUs from './Components/AboutUs/AboutUs'
import Contact from './Components/Contact/Contact'
import { Outlet } from 'react-router-dom'

export default function RoutLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}


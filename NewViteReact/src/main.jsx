import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider , createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom'

import Home from './Components/HomePage/Home.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'
import RoutLayout from './RoutLayout.jsx'
import './index.css'

// #1 - Helps to render specific parts of the webpage
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<RoutLayout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"AboutUs", // Make sure the path matches the exact path
//         element:<AboutUs/>  // Match the import files correctly
//       },
//       {
//         path:"Contact", // Make sure the path matches the exact path
//         element:<Contact/>
//       }
//     ]
//   }
// ])


// #2 - 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RoutLayout />}>
      <Route path='' element={<Home />} />
      <Route path='AboutUs' element={<AboutUs />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route loader={githubInfoLoader} path='Github' element={<Github />}/>
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

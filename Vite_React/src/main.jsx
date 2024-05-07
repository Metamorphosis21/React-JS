import React from 'react'      // for mobiles
import ReactDOM from 'react-dom/client'     // for websites

import App1 from './App1.jsx'
import Comp1 from './myComp1.jsx'
import Hook from './Hook.jsx'
import P1_bgChanger from './p1_bgChanger.jsx'

// function Check(){
//   return(
//     <h2>Check function</h2>
//   )
// }

// const CheckEle = (
//   <a href="https://google.com">Go Google</a>
// )
  
// const reactEle = React.createElement(
//   'a' , 
//   {href : 'https//:google.com' , target : '_blank'} , 
//   'Click me'
// )


ReactDOM.createRoot(document.getElementById("root")) // ReactDOM - this version of react helps us to add and modify components in the web
  .render(              //  renders HTML to the web page (here makes the App component to be insisde the root div)
    <React.StrictMode>
      
      {/*<App1 />
       <Comp1 />
      <Hook /> */}
      <P1_bgChanger/>
      
    </React.StrictMode>
  );

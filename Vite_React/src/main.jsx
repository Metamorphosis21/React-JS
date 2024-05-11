import React from 'react'      // for mobiles
import ReactDOM from 'react-dom/client'     // for websites

import App from './tempReact.jsx'
import Comp1 from './myComp1.jsx'
import Hook from './Hook.jsx'
import P1_BgChanger from './p1_bgChanger.jsx'
import P2_PasswordGenerator from './P2_PasswordGenerator.jsx'

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
      
       {/*<App />
      <Comp1 />
      <Hook /> 
      <P1_BgChanger/>*/}
      <P2_PasswordGenerator/>

      
    </React.StrictMode>
  );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Comp1 from './myComp1.jsx'


ReactDOM.createRoot(document.getElementById('root')).   // ReactDOM - this version of react helps us to add and modify components in the web
render(   //  renders HTML to the web page (here makes the App component to be insisde the root div)
  <React.StrictMode>
    <App />
     <Comp1 />    {/* react component 1 */}
  </React.StrictMode>,
)

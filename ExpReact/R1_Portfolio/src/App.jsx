import "./App.css";
import Index from "./Components/Index/Index.jsx" 
import Projects from "./Components/Projects/Projects.jsx" 
import Skills from "./Components/Skills/Skills.jsx";
import ContactMe from "./Components/ContactMe/ContactMe.jsx";

function App() {

  console.log("Works fine... ");

  return (
    <>
      <div className="App">
        <Index/>
        <Projects/>
        <Skills/>
        <ContactMe/>
      </div>
    
    </>
  );
}

export default App;

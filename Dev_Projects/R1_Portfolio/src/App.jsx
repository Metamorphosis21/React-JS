import "./App.css";
import Index from "./Components/Index/Index.jsx" 
import Projects from "./Components/Projects/Projects.jsx" 
import Skills from "./Components/Skills/Skills.jsx";
import ContactMe from "./Components/ContactMe/ContactMe.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Index/>
        <Projects/>
        <Skills/>
        <ContactMe/>
        <Footer/>
      </div>
    
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import ClassBasedComponent from "./Components/classBasedComponents";
import FunctionalComponent from "./Components/functionalComponent";

function App() {
  return (
    <>
      <div className="text-amber-300 font-mono bg-red-900 text-center">Tailwind Test</div>
      <ClassBasedComponent />
      <FunctionalComponent />
    </>
  );
}

export default App;

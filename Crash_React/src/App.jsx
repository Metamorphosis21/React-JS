import React from "react";
import "./App.css";
// import ClassBasedComponent from "./Components/classBasedComponents";
// import FunctionalComponent from "./Components/functionalComponent";
import { ProductList } from "./Products/ProductList";


function App() {
  return (
    <>
      <div className="w-[100%] text-amber-300 font-mono bg-red-900 text-center">Tailwind Test</div>
      {/* <ClassBasedComponent />
      <FunctionalComponent /> */}
      <ProductList/>
    </>
  );
}

export default App;

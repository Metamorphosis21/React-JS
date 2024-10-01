import React from "react";
import "./App.css";
// import ClassBasedComponent from "./Components/classBasedComponents";
// import FunctionalComponent from "./Components/functionalComponent";
import { ProductList } from "./Products/ProductList";

const products = ["Product 1", "Product 2", "Product 3"];

function App() {
  return (
    <>
      <div className="w-[100%] text-amber-300 font-mono bg-red-900 text-center">Tailwind Test</div>
      {/* <ClassBasedComponent />
      <FunctionalComponent /> */}
      <ProductList listproducts={products} name='Zumba' age='19' city='Nagaland'/>
    </>
  );
}

export default App;

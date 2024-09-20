import React from "react";
import { ProductItems } from "./Items/ProductItems";

const products = ["Product 1", "Product 2", "Product 3"];

function ButtonComp() {
  return <button>Click Me</button>;
}

export function ProductList() {
  return (
    <div>
      <h2>Product Lists: </h2>
      {/* <ol>
        {products.map((p , index) => <li key={index}>{p}</li>)}
      </ol> */}
      <ProductItems listOfProducts={products}/>
      <ButtonComp />
    </div>
  );
}

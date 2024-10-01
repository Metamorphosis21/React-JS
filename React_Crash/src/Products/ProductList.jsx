/* eslint-disable react/prop-types */
// import { ProductItems } from "./Items/ProductItems";
import './ProductStyle.css'

function ButtonComp() {
  return <button className="clickButton">Click Me</button>;
}

export function ProductList({listproducts , name , age, city}) {     // Props - Object , Destructuring
  return (
    <div>
      <p>{name} of age {age} has order from {city}</p>
      <h2 className="heading2">Product Lists: </h2>
      <ol>
        {listproducts.map((p , index) => <li key={index}>{p}</li>)}
      </ol>
      {/* <ProductItems listOfProducts={products}/> */}
      <ButtonComp />
    </div>
  );
}

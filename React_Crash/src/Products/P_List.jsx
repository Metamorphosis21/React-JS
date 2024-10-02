/* eslint-disable react/prop-types */
import { useState } from "react";
import { P_Items } from "./Items/P_Items";
import "./ProductStyle.css";

function ButtonComp() {
  return <button className="clickButton">Click Me</button>;
}

export function P_List({ listproducts, name, age, city }) {  // Props - Object , Destructuring
  const [flag , setFlag] = useState(false);
  
  // function renderifTrueorFalse(getFlag){
  //   return getFlag ? (
  //     <p>
  //       Prop - <u>{name}</u> of age <u>{age}</u> has ordered from <u>{city}</u>
  //     </p>
  //   ) : (
  //     <p>Hello Mate! Ready to order?</p>
  //   )
  // }

  const rederifTrueorFalse = flag ? <p>Prop - <u>{name}</u> of age <u>{age}</u> has ordered from <u>{city}</u></p> : <p>Hello Mate! Ready to order?</p>

  return (
    <section className="ProductListing_Component border border-red-400 mt-3 p-3">
      <div className="prop_div bg-red-400 text-slate-200 px-2">
        {
          // 1st Method:
          // flag ? (<p>
          //     Prop - <u>{name}</u> of age <u>{age}</u> has ordered from <u>{city}</u>
          //       </p>
          // ) : (
          //     <p>Hello Mate! Ready to order?</p>
          //     )
          // 2nd Method:
          // renderifTrueorFalse(flag)
          // 3rd Method:
          rederifTrueorFalse
        }
      </div>
      <ol className="order_plist">
        <h2 className="heading2">Product Lists: (Parent_Comp)</h2>
        {listproducts.map((p, index) => (
          <P_Items singleproduct={p} key={index} />
        ))}
        <ButtonComp />
      </ol>
    </section>
  );
}

import { useState } from "react";

function Hook() {

    // let count = 0;
    let [Count , setCount] = useState(0);     // ---> hook

    const valueUp = () => {
        // console.log(Count);
        ++Count;
        if(Count > 20)  Count = 20;
        setCount(Count);
    }
    
    const valueDown = () => {
        // console.log(Count);
        --Count;
        if(Count < 0)   Count=0;
        setCount(Count);
    }

    return (
      <>
        <h1>Counter Value : {Count}</h1>

        <button onClick={valueUp}>Add Value</button>
        <button onClick={valueDown}>Remove Value</button>
      </>
    )
  }
  
  export default Hook
  
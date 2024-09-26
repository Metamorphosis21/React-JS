/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuList from "./MenuList";

function MenuItem({ item }) {
  const [displayCurrentItem, setDisplaycurrentitem] = useState({});

  function handleToggleChildren(getCurrentitem) {
    setDisplaycurrentitem({
      ...displayCurrentItem , [getCurrentitem] : !displayCurrentItem[getCurrentitem]
    })
  }

  // console.log(displayCurrentItem);
  
  return (
    <li>
      <div className="listitem">
        <p>{item.title}</p>
        {
          item && item.children && item.children.length > 0 ? <span onClick={() => handleToggleChildren(item.title)}>{
            displayCurrentItem[item.title] ? '-' : '+'
          }</span> : null
        }
      </div>
        {
          item && item.children && item.children.length > 0 && displayCurrentItem[item.title]? (<MenuList list={item.children} />) : null
        }
    </li>
  );
}

export default MenuItem;

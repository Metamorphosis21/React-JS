/* eslint-disable react/jsx-key */
import { useState } from "react";
import styles from "./Styles_01.module.css";
import { data } from "./Data_01";

function Accordian_01() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  let [multiselected, setMultiselected] = useState([]);

  function openSingleAccordian(getId) {
    setSelected(getId === selected ? null : getId);
  }

  function openMultiAccordian(getId) {
    let copyMultiselected = [...multiselected];
    copyMultiselected.includes(getId)
      ? copyMultiselected.splice(copyMultiselected.indexOf(getId), 1)
      : copyMultiselected.push(getId);

    // const indexOfcurrentId = copyMultiselected.indexOf(getId);
    // if (indexOfcurrentId === -1) copyMultiselected.push(getId);
    // else copyMultiselected.splice(indexOfcurrentId, 1);

    setMultiselected(copyMultiselected);
  }
  console.log(multiselected);

  return (
    <section className="sec01">
      <div className={styles.heading}>Accordian 01</div>

      <div className={styles.wrapper}>
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className={styles.button}
        >
          {enableMultiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultiSelection
                  ? () => openMultiAccordian(dataItem.id)
                  : () => openSingleAccordian(dataItem.id)
              }
              className={styles.item}
            >
              <h3>{dataItem.question}</h3>
              <span className={styles.more}>+</span>
              {
              enableMultiSelection
                ? (multiselected.includes(dataItem.id)) && 
                    <div className={styles.content}>{dataItem.answer}</div>
                  
                : (selected === dataItem.id) && 
                    <div className={styles.content}>{dataItem.answer}</div>
              }
            </div>
          ))
        ) : (
          <div>No Data Found !!</div>
        )}
      </div>
    </section>
  );
}

export default Accordian_01;

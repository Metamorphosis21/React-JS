import Modal_test from "./Modal_test";
import { useState } from "react";

function Modal_10() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <div className="heading">Modal Pop Up 10</div>

      <button onClick={handleToggleModal}>Open Modal PopUp</button>
      {showModal && (
        <Modal_test
          key={1}
          header={<div>Custom header</div>}
          // body={<div>Custom body</div>}
          footer={<div>Custom footer</div>}
        />
      )}
    </div>
  );
}

export default Modal_10;

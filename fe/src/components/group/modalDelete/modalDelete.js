import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./modalDelete.css";

// const customStyles = {
//   content: {
//     top: "20%",
//     left: "20%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "500%",
//     transform: "translate(-50%, -50%)",
//   },
// };

Modal.setAppElement("#root");

function ModalDelete() {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
    console.log("you will delete progress.....");
  }

  function closeModal() {
    setIsOpen(false);
    console.log("your action will be updated soon.....");
  }

  return (
    <div>
      <button className="btn-modal" onClick={openModal}>
        Delete Progress
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Progress</h2> */}
        {/* <div>Add Progress</div> */}
        <div className="top-wrap">
          <h2 className="title">Delete Progress</h2>
        </div>
        <button className="btn-close" onClick={closeModal}>
          close
        </button>

        {/* <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      </Modal>
    </div>
  );
}

export default ModalDelete;

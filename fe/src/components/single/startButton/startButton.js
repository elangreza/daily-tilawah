import React, { useState } from "react";
import Modal from "react-modal";
import "./startButton.css";

Modal.setAppElement("#root");

function StartButton() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
    console.log("you will update progress.....");
  }

  function closeModal() {
    setIsOpen(false);
    console.log("your action will be updated soon.....");
  }

  return (
    <div>
      <button className="op1" onClick={openModal}>
        Start From Juz 1
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
        <div className="top-wrap">
          <h2 className="title">Start From Juz 1</h2>
        </div>
        <button className="btn-close" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
}

export default StartButton;

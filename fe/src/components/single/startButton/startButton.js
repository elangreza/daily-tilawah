import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const StartButton = () => {
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
      <button
        className="op1 h-[35px] w-[550px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
        onClick={openModal}
      >
        Start From Juz 1
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        className="modal absolute top-[60px] right-[200px] left-[200px] bottom-[60px] bg-slate-200"
        overlayClassName="overlay fixed inset-0 bg-gray-500/10"
      >
        <div className="top-wrap flex flex-row w-full h-[70px] items-center justify-center">
          <h2 className="title text-3xl">Start From Juz 1</h2>
        </div>
        <button
          className="btn-close hover:cusor h-[30px] w-[75px] bottom-[15px] right-[15px] absolute bg-slate-600 text-white rounded"
          onClick={closeModal}
        >
          close
        </button>
      </Modal>
    </div>
  );
};

export default StartButton;

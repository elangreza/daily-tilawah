import React, { useState } from "react";
import Modal from "react-modal";
import { CustomFromJuz, CustomFromPage, StartFromJuz1 } from "./menu";

Modal.setAppElement("#root");

const ModalAdd = ({ progressPages, setProgressPages }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [fromPage, setFromPage] = useState("");
  const [toPage, setToPage] = useState("");
  const [fromJuz, setFromJuz] = useState("");
  const [isCustomFromPage, setIsCustomFromPage] = useState(false);
  const [isCustomFromJuz, setIsCustomFromJuz] = useState(false);
  const [isStartFromJuz1, setIsStartFromJuz1] = useState(false);
  const [isCustomJuz1Checked, setIsCustomJuz1Checked] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    console.log("you will update progress.....");
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log("your action will be updated soon.....");
  };

  const handleStartFromJuz1 = () => {
    setIsStartFromJuz1(true);
  };

  const handleCustomJuz1Change = (e) => {
    setIsCustomJuz1Checked(e.target.checked);
  };

  const handleCustomFromJuz = () => {
    setIsCustomFromJuz(true);
  };

  const handleFromJuzChange = (e) => {
    if (isNaN(e.target.value) || e.target.value < 0) {
      return;
    }
    setFromJuz(e.target.value);
  };

  const handleCustomFromPage = () => {
    setIsCustomFromPage(true);
  };

  const handleFromPageChange = (e) => {
    if (isNaN(e.target.value) || e.target.value < 0) {
      return;
    }
    setFromPage(e.target.value);
  };

  const handleToPageChange = (e) => {
    if (isNaN(e.target.value) || e.target.value < 0) {
      return;
    }
    setToPage(e.target.value);
  };

  const handleSubmit = () => {
    console.log("fromPage", fromPage);
    console.log("toPage", toPage);
    const from = Number(fromPage);
    const to = Number(toPage);
    if (isNaN(from) || isNaN(to) || from < 1 || to < 1 || to < from) {
      // validator for prevent invalid input
      return;
    }

    const numberOfPages = to - from + 1;
    const lastPage = to;
    const readDate = new Date().toISOString().slice(0, 10);
    setProgressPages((prev) => [
      ...prev,
      { readDate, numberOfPages, lastPage },
    ]);
    setIsStartFromJuz1(false);
    setIsCustomFromPage(false);
    setIsCustomFromJuz(false);
    setFromPage("");
    setToPage("");
  };

  const handleBackToMainModal = () => {
    setIsStartFromJuz1(false);
    setIsCustomFromPage(false);
    setIsCustomFromJuz(false);
    setFromPage("");
    setToPage("");
  };

  return (
    <div>
      <button
        className="w-[70px] sm:h-[30px] sm:w-[100px] md:h-[30px] md:w-[150px] bg-white rounded text-xs sm:text-sm md:text-lg md:font-bold shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
        onClick={openModal}
      >
        Add Progress
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal absolute top-[60px] right-[40px] left-[40px] md:right-[200px] md:left-[200px] bottom-[60px] bg-slate-200"
        overlayClassName="overlay fixed inset-0 bg-gray-500/50 "
      >
        <div className="top-wrap flex flex-row w-full h-[70px] items-center justify-center">
          <h2 className="title md:text-3xl text-lg">Add Progress</h2>
        </div>
        <button
          className="btn-close hover:cusor h-[30px] w-[75px] bottom-[15px] right-[15px] absolute bg-slate-600 text-white rounded"
          onClick={closeModal}
        >
          close
        </button>
        <div className="btn-option-wrap flex flex-col gap-4 items-center w-full h-[45px]">
          <button
            onClick={handleStartFromJuz1}
            className={`op2 md:h-[35px] md:w-[550px] h-[70px] w-[150px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150 ${
              isCustomFromPage || isCustomFromJuz
                ? "hidden pointer-events-none"
                : "block"
            }`}
          >
            Start From Juz 1
          </button>
          <button
            onClick={handleCustomFromJuz}
            className={`op2 md:h-[35px] md:w-[550px] h-[70px] w-[150px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150 ${
              isCustomFromPage || isStartFromJuz1
                ? "hidden pointer-events-none"
                : "block"
            }`}
          >
            Custom: Start From Juz
          </button>
          <button
            onClick={handleCustomFromPage}
            className={`op3 md:h-[35px] md:w-[550px] h-[70px] w-[150px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150 ${
              isCustomFromJuz || isStartFromJuz1
                ? "hidden pointer-events-none"
                : "block"
            }`}
          >
            Custom : Start From Page
          </button>

          {/* custom from juz 1 menu */}
          <StartFromJuz1
            isStartFromJuz1={isStartFromJuz1}
            isCustomJuz1Checked={isCustomJuz1Checked}
            handleCustomJuz1Change={handleCustomJuz1Change}
            handleFromPageChange={handleFromPageChange}
            handleToPageChange={handleToPageChange}
            fromPage={fromPage}
            toPage={toPage}
            handleSubmit={handleSubmit}
            handleBackToMainModal={handleBackToMainModal}
          />

          {/* custom from juz menu */}
          <CustomFromJuz
            isCustomFromJuz={isCustomFromJuz}
            handleFromJuzChange={handleFromJuzChange}
            fromJuz={fromJuz}
            handleFromPageChange={handleFromPageChange}
            fromPage={fromPage}
            handleToPageChange={handleToPageChange}
            toPage={toPage}
            handleSubmit={handleSubmit}
            handleBackToMainModal={handleBackToMainModal}
          />

          {/* custom from page menu */}
          <CustomFromPage
            isCustomFromPage={isCustomFromPage}
            handleFromPageChange={handleFromPageChange}
            fromPage={fromPage}
            handleToPageChange={handleToPageChange}
            toPage={toPage}
            handleSubmit={handleSubmit}
            handleBackToMainModal={handleBackToMainModal}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalAdd;

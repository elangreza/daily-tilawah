import React from "react";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const ModalAdd = () => {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [fromPage, setFromPage] = useState("");
  const [toPage, setToPage] = useState("");
  const [fromJuz, setFromJuz] = useState("");
  const [isCustomFromPage, setIsCustomFromPage] = useState(false);
  const [isCustomFromJuz, setIsCustomFromJuz] = useState(false);
  const [isStartFromJuz1, setIsStartFromJuz1] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
    console.log("you will update progress.....");
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log("your action will be updated soon.....");
  };

  const handleStartFromJuz1 = () => {
    setIsStartFromJuz1(true);
  };

  const handleSubmitStartFromJuz1 = () => {
    setIsStartFromJuz1(false);
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

  const handleSubmitCustomFromJuz = () => {
    setIsCustomFromJuz(false);
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

  const handleSubmitCustomFromPage = () => {
    console.log("fromPage", fromPage);
    console.log("toPage", toPage);
    setIsCustomFromPage(false);
  };

  // Fungsi untuk generate page ranges
  const generatePageRanges = () => {
    const ranges = [];
    for (let i = 1; i <= 601; i += 4) {
      const start = i;
      const end = Math.min(i + 3, 604); // Pastikan tidak melebihi 604
      ranges.push({ start, end });
    }
    return ranges;
  };

  return (
    <div>
      <button
        className="btn-modal h-[30px] w-[150px] bg-white rounded text-lg font-bold shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
        onClick={openModal}
      >
        Add Progress
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal absolute top-[60px] right-[200px] left-[200px] bottom-[60px] bg-slate-200"
        overlayClassName="overlay fixed inset-0 bg-gray-500/50 "
      >
        <div className="top-wrap flex flex-row w-full h-[70px] items-center justify-center">
          <h2 className="title text-3xl">Add Progress</h2>
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
            className={`op2 h-[35px] w-[550px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150 ${
              isCustomFromPage || isCustomFromJuz
                ? "hidden pointer-events-none"
                : "block"
            }`}
          >
            Start From Juz 1
          </button>
          <button
            onClick={handleCustomFromJuz}
            className={`op2 h-[35px] w-[550px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150 ${
              isCustomFromPage || isStartFromJuz1
                ? "hidden pointer-events-none"
                : "block"
            }`}
          >
            Custom: Start From Juz
          </button>
          <button
            onClick={handleCustomFromPage}
            className={`op3 h-[35px] w-[550px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150 ${
              isCustomFromJuz || isStartFromJuz1
                ? "hidden pointer-events-none"
                : "block"
            }`}
          >
            Custom : Start From Page
          </button>

          {/* custom from juz 1 menu */}
          <div
            className={`flex flex-row gap-4 items-center ${
              isStartFromJuz1 ? "block" : "hidden pointer-events-none"
            }`}
          >
            <div className="flex flex-col ">
              <label htmlFor="input-from-juz-1">
                <input type="checkbox" />
                <span>&nbsp; Start From Juz 1</span>
              </label>
              <span>Input Page Your Page</span>
              <div className="flex flex-col overflow-auto h-[200px] w-[350px]">
                {generatePageRanges().map((range, index) => (
                  <label
                    key={index}
                    htmlFor={`form-input-page-${range.start}-${range.end}`}
                  >
                    <input type="checkbox" />
                    <span>
                      &nbsp; Page {range.start} - {range.end}
                    </span>
                  </label>
                ))}
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="input-custom-juz-1">
                  <input type="checkbox" />
                  <span>&nbsp; Custom</span>
                </label>
              </div>
            </div>
            <button
              onClick={handleSubmitStartFromJuz1}
              className=" h-[35px] w-[100px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
            >
              Submit
            </button>
          </div>

          {/* custom from juz menu */}
          <div
            className={`flex flex-row gap-4 items-center ${
              isCustomFromJuz ? "block" : "hidden pointer-events-none"
            }`}
          >
            <div className="flex flex-col">
              <label htmlFor="input-from-juz">
                <span>From Juz &nbsp;</span>
                <input
                  type="number"
                  onChange={handleFromJuzChange}
                  value={fromJuz}
                  placeholder="0"
                  className="w-[100px]"
                />
              </label>
              <label htmlFor="page-from-juz">
                <input type="checkbox" />
                <span>Page</span>
              </label>
            </div>

            <button
              onClick={handleSubmitCustomFromJuz}
              className="btn-start h-[35px] w-[100px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
            >
              Submit
            </button>
          </div>

          {/* custom from page menu */}
          <div
            className={`flex flex-row gap-4 items-center ${
              isCustomFromPage ? "block" : "hidden pointer-events-none"
            }`}
          >
            <label htmlFor="input-from-page">
              <span>From Page &nbsp;</span>
              <input
                type="number"
                onChange={handleFromPageChange}
                value={fromPage}
                placeholder="0"
                className="w-[100px]"
              />
            </label>

            <label htmlFor="input-to-page">
              <span>To Page &nbsp;</span>
              <input
                type="number"
                onChange={handleToPageChange}
                value={toPage}
                placeholder="0"
                className="w-[100px]"
              />
            </label>
            <button
              onClick={handleSubmitCustomFromPage}
              className="btn-start h-[35px] w-[100px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAdd;

import { generatePageRanges } from "./funcPageRanges";

const StartFromJuz1 = ({
  isStartFromJuz1,
  isCustomJuz1Checked,
  handleCustomJuz1Change,
  handleFromPageChange,
  handleToPageChange,
  fromPage,
  toPage,
  handleSubmit,
  handleBackToMainModal,
}) => {
  return (
    <div>
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
          <span>Input Your Page</span>
          <div
            className={`flex flex-col overflow-auto h-[200px] w-[350px] ${
              isCustomJuz1Checked ? "hidden pointer-events-none" : "block"
            }`}
          >
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
              <input
                type="checkbox"
                id="input-custom-juz-1"
                checked={isCustomJuz1Checked}
                onChange={handleCustomJuz1Change}
              />
              <span>&nbsp; Custom</span>
            </label>
          </div>
          <div
            className={`${
              isCustomJuz1Checked ? "block" : "hidden pointer-events-none"
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
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={handleSubmit}
            className="btn-start h-[35px] w-[100px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
          >
            Submit
          </button>
          <button
            onClick={handleBackToMainModal}
            className="btn-start h-[35px] w-[100px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomFromJuz = ({
  isCustomFromJuz,
  handleFromJuzChange,
  fromJuz,
  handleFromPageChange,
  fromPage,
  handleToPageChange,
  toPage,
  handleSubmit,
  handleBackToMainModal,
}) => {
  return (
    <div>
      <div
        className={`flex flex-row gap-4 items-center ${
          isCustomFromJuz ? "block" : "hidden pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="input-from-juz">
            <span>From Juz &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input
              type="number"
              onChange={handleFromJuzChange}
              value={fromJuz}
              placeholder="0"
              className="w-[100px]"
            />
          </label>
          <div>
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
              <span>&nbsp;&nbsp;To Page &nbsp;</span>
              <input
                type="number"
                onChange={handleToPageChange}
                value={toPage}
                placeholder="0"
                className="w-[100px]"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={handleSubmit}
            className="btn-start h-[35px] w-[100px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
          >
            Submit
          </button>
          <button
            onClick={handleBackToMainModal}
            className="btn-start h-[35px] w-[100px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomFromPage = ({
  isCustomFromPage,
  handleFromPageChange,
  fromPage,
  handleToPageChange,
  toPage,
  handleSubmit,
  handleBackToMainModal,
}) => {
  return (
    <div>
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
        <div className="flex flex-col gap-4">
          <button
            onClick={handleSubmit}
            className="btn-start h-[35px] w-[100px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
          >
            Submit
          </button>
          <button
            onClick={handleBackToMainModal}
            className="btn-start h-[35px] w-[100px] bg-gray-800 text-white rounded text-lg shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export { StartFromJuz1, CustomFromJuz, CustomFromPage };

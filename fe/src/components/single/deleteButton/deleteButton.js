import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const DeleteButton = ({ setProgressPages }) => {
  const env = process.env.REACT_APP_ENVIRONMENT;
  const handleClick = () => {
    console.log("confirmation please...");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        setProgressPages([]);
        localStorage.removeItem("inputProgress");
        console.log("your record is deleted...");
      }
    });
  };
  return (
    <div>
      {env === "DEV" && (
        <button
          className="w-[70px] sm:h-[30px] sm:w-[100px] md:h-[30px] md:w-[150px] bg-white rounded text-xs sm:text-sm md:text-lg md:font-bold shadow-lg active:shadow-sm active:translate-y-1 transition transform duration-150"
          onClick={handleClick}
        >
          Delete Progress
        </button>
      )}
    </div>
  );
};

export default DeleteButton;

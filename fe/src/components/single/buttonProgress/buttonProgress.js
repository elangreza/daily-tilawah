import React from "react";
import { useNavigate } from "react-router-dom";
import "./buttonProgress.css";

const ButtonAdd = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="btn-addProgress" onClick={() => navigate("")}>
        Add Progress
      </button>
    </div>
  );
};

const ButtonDelete = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="btn-deleteProgress" onClick={() => navigate("")}>
        Delete Progress
      </button>
    </div>
  );
};

function ButtonProgress() {
  return (
    <div className="btn-wrapper">
      <ButtonAdd />
      <ButtonDelete />
    </div>
  );
}

export default ButtonProgress;

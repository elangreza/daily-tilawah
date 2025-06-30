import React from "react";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "./cricularProgress.css";

const CircularProgress = () => {
  return (
    <div className="progress-warp">
      <div className="progressDonut">
        <CircularProgressbarWithChildren
          value={80}
          text={`${80}%`}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: "butt",
          })}
        >
          <RadialSeparators
            count={30}
            style={{
              background: "#fff",
              width: "2px",
              // This needs to be equal to props.strokeWidth
              height: `${10}%`,
            }}
          />
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default CircularProgress;

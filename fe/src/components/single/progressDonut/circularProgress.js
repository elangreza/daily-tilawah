import React from "react";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const CircularProgress = ({ progressPages }) => {
  const percentageProgress = Math.min((progressPages / 604) * 100, 100);

  return (
    <div className="progress-warp flex absolute top-[90px] w-full justify-center">
      <div className="progressDonut absolute h-[130px] w-[130px]">
        <CircularProgressbarWithChildren
          value={percentageProgress}
          text={`${Math.round(percentageProgress)}%`}
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

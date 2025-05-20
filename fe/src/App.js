import "./App.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Daily Tilawah</h3>
      </header>

      <div className="btn-wrapper">
        <button className="btn-addProgres">Add Progress</button>
        <button className="btn-deleteProgress">Delete Progress</button>
      </div>
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
            count={12}
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
}

export default App;

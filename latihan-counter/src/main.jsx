import React from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [counter, setCounter] = React.useState(0);

  function setPlus() {
    setCounter(counter + 1);
  }

  function setMinus() {
    setCounter(counter - 1);
  }
  if (counter === 10 || counter <= -1) {
    setCounter("Done");
  }

  return (
    <div>
      <button
        onClick={() => setCounter(counter + 1)}
        disabled={counter === 10 || counter === "Done"}>
        +
      </button>
      <span> {counter} </span>
      <button
        onClick={() => setCounter(counter - 1)}
        disabled={counter <= -1 || counter === "Done"}>
        {" "}
        -{" "}
      </button>
      <br />
      <button onClick={() => setCounter(0)} disabled={counter != "Done"}>
        Reset
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Counter />
  </>
);

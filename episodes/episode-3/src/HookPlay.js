import { useState } from "./UseStateHook";

export const HookPlay = () => {
  const [number1, setNumber1] = useState(0); // id = 0

  return (
    <div id="main-container">
      <div id="heading">
        <h2>useState</h2>
        <label>built from scratch</label>
      </div>
      <div id="container">
        <button
          className="btn"
          onClick={() => {
            setNumber1(number1 - 1);
          }}
        >
          Subtract
        </button>
        <label className="number">{number1}</label>
        <button
          className="btn"
          onClick={() => {
            setNumber1(number1 + 1);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

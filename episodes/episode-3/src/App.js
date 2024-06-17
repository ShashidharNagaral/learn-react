import { useState } from "./Hooks";

const App = () => {
  const [number1, setNumber1] = useState(0); // id = 0
  const [number2, setNumber2] = useState(0); // id = 1

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setNumber1(number1 + 1);
          }}
        >
          Add
        </button>
        {number1}
        <button
          onClick={() => {
            setNumber1(number1 - 1);
          }}
        >
          Subtract
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setNumber2(number2 + 1);
          }}
        >
          Add
        </button>
        {number2}
        <button
          onClick={() => {
            setNumber2(number2 - 1);
          }}
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default App;

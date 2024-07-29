import { useEffect, useState } from "./Hooks";

const App = () => {
  const [number1, setNumber1] = useState(0); // id = 0
  const [number2, setNumber2] = useState(0); // id = 1

  useEffect(() => {
    console.log("this is called every time 1!");
  });

  useEffect(() => {
    console.log("this is called once 1!");
  }, []);

  useEffect(() => {
    console.log("this is called number 2 state is updated");
  }, [number2]);

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

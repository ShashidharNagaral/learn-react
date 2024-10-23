import { useEffect, useState } from "react";
import "../styles/timer.css";

const enable = "timer-button";
const disable = "timer-button-disabled";
const startTime = 0;
export const Timer = () => {
  // FIXME: do not use timer value for both rendering the time and in interval
  // TODO: instead use a precised time calculation to actually find the second elapsed and render the value according
  // TODO: use setInterval for better precision in calculating the time elapsed

  const [value, setValue] = useState(0);
  const [buttonState, setButtonState] = useState({
    start: false,
    pause: true,
    reset: true,
  });
  const [intervalRef, setIntervalRef] = useState(null);

  // clear interval when component is unmounted
  useEffect(() => {
    return () => {
      clearInterval(intervalRef);
      setIntervalRef(null);
    };
  }, []);

  useEffect(() => {
    if (value <= 0.1 && buttonState.start === true) {
      setTimeout(() => {
        onReset();
        alert("TimeUp");
      }, 5);
    }
  }, [value]);

  const updateButtonState = (start, pause, reset) => {
    setButtonState((x) => {
      return { ...x, start: start, pause: pause, reset: reset };
    });
  };

  const onTimeChange = (e) => {
    let input = e.target.value;
    setValue(input);
  };

  const onStart = () => {
    if (parseInt(value) <= 0 || isNaN(value)) {
      alert("enter value greater than 0");
      return;
    }
    updateButtonState(true, false, false);

    if (!intervalRef) {
      const ref = setInterval(() => {
        setValue((v) => {
          return Math.round(Math.max(v - 1, 0));
        });
      }, 1000);
      setIntervalRef(ref);
    }
  };

  const onPause = () => {
    updateButtonState(false, true, false);
    clearInterval(intervalRef);
    setIntervalRef(null);
  };

  const onReset = () => {
    updateButtonState(false, true, true);
    clearInterval(intervalRef);
    setIntervalRef(null);
    setValue(startTime);
  };

  return (
    <div id="timer">
      <label id="timer-header">Timer</label>
      <div id="timer-container">
        <div id="timer-button-container">
          <button
            disabled={buttonState.start}
            onClick={onStart}
            className={buttonState.start ? disable : enable}
          >
            Start
          </button>
          <button
            disabled={buttonState.pause}
            onClick={onPause}
            className={buttonState.pause ? disable : enable}
          >
            Pause
          </button>
          <button
            disabled={buttonState.reset}
            onClick={onReset}
            className={buttonState.reset ? disable : enable}
          >
            Reset
          </button>
        </div>
        <div id="timer-label-container">
          <input
            min={0}
            type={"number"}
            onChange={onTimeChange}
            id="timer-label"
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

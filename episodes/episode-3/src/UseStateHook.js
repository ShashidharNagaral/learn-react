import { renderRoot } from "..";

const states = []; // store states [initial_value, callback_function] for each of the state variable in App component
let state_count = -1; // this is used to give unique id for each state variable

const useState = (initialValue) => {
  const id = state_count; // assign id to each of the useState variables

  ++state_count;

  // if variable is already in the states, return the variable with its new state
  // this will happen during re-rendering
  if (states[id]) {
    return states[id];
  }

  const setValue = (value) => {
    state_count = -1; // reset the count to -1, so that in next re-rendering process all the state_variables will get same id again
    let v;
    if (typeof value == "function") {
      v = value(states[id][0]); // if callback function takes current state of state variable
    } else {
      v = value;
    }
    states[id][0] = v; // setting the value to the variable
    renderRoot();
  };

  const record = [initialValue, setValue];
  states[id] = record; // store the state variable in states
  return record;
};

export { useState };

import { renderRoot } from "..";

const states = []; // store states for each of the state variable in App component
let state_count = -1; // this is used to give unique id for each state variable

const useState = (initialValue) => {
  const id = ++state_count;

  // if variable is already in the states, return the variable with new state
  if (states[id]) {
    return states[id];
  }

  const setInitialValue = (value) => {
    states[id][0] = value;
    // reset the count to -1, so that in next re-rendering process all the state_variables will get same id again
    state_count = -1;
    renderRoot();
  };
  const record = [initialValue, setInitialValue];
  states[id] = record; // store the state variable in states
  return record;
};

export { useState };

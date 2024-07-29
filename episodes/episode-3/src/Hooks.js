import { renderRoot } from "..";

const states = []; // store states [initial_value, callback_function] for each of the state variable in App component
let state_count = -1; // this is used to give unique id for each state variable
var cf_list = [];
let called_once = false;

const useState = (initialValue) => {
  const id = ++state_count;

  // if variable is already in the states, return the variable with its new state
  if (states[id]) {
    return states[id];
  }

  const setValue = (value) => {
    states[id][0] = value;
    // reset the count to -1, so that in next re-rendering process all the state_variables will get same id again
    state_count = -1;
    renderRoot();
    // when state variable is updated call each of the callback functions
    cf_list.forEach((f) => {
      if (f[0] === undefined) f[1]();
      else {
        // check for dependencies linked for the callback function
        // also check who called the setValue function
        f[0].forEach((state) => {});
      }
    });
    called_once = true;
    cf_list = []; // reset the cf_list
  };

  const record = [initialValue, setValue];
  states[id] = record; // store the state variable in states
  return record;
};

const useEffect = (callbackFunction, dependencies) => {
  if (dependencies === undefined) {
    cf_list.push([undefined, callbackFunction]); // push all the callback function in a cf_list variable
  } else if (Array.isArray(dependencies)) {
    if (dependencies.length === 0) {
      if (!called_once) cf_list.push([undefined, callbackFunction]); // push all the callback function in a cf_list variable
    } else {
      cf_list.push([dependencies, callbackFunction]);
      // TODO: implement this
    }
  }
};

export { useEffect, useState };

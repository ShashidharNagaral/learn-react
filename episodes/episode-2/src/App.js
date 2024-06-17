import React from "react";

import React from "react";
import { createRoot } from "react-dom/client";

// JSX => neither HTML nor javascript language, its absolutely new langauge which has html like syntax.
// this below code gets converted to JS before it goes to JS-Engine
// BABEL is a JS-compiler which converts JSX => JS

// JSX => React.createElement => React Element(JS Object) => HTML element
const Title = <h1>This is react element.</h1>; // this is also a react element

const App = () => {
  return (
    <div>
      {Title}
      <h2>This is react component.</h2>
    </div>
  ); // this react component (function) which returns a react element.
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

import React from "react";
import { createRoot } from "react-dom/client";
import { HookPlay } from "./src/HookPlay";
import { StatePlay } from "./src/StatePlay";
import { Timer } from "./src/Timer";

const root = createRoot(document.getElementById("root"));

const renderRoot = () => {
  root.render(
    <div id="index">
      <StatePlay />
      <hr className="borderLine" />
      {/* <HookPlay /> */}
      {/* <hr className="borderLine" /> */}
      <Timer />
    </div>
  );
};

renderRoot();

export { renderRoot };

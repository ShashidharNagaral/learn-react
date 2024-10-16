import React from "react";
import { createRoot } from "react-dom/client";

const h1 = React.createElement("h1", { id: "heading" }, "This is h1 tag");

const root = createRoot(document.getElementById("root"));

root.render(h1);

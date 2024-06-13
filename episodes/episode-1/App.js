const h1 = React.createElement("h1", { id: "heading1" }, "Learn React!");
const h2 = React.createElement(
  "h2",
  { id: "heading2" },
  " - Shashidhar Nagaral"
);
const div = React.createElement("div", {}, h1, h2);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(div);
console.log(root);

root.render(div);

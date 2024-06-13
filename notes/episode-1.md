## NOTES:

- Injecting React into HTML template

        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Learn-React</title>
        </head>
        <body>
            <div id="root">
            <script
                crossorigin
                src="https://unpkg.com/react@18/umd/react.development.js"
            ></script>
            <script
                crossorigin
                src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
            ></script>
            <script>
                const heading = React.createElement("h1", {}, "Learn React!");
                const root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(heading);
            </script>
            </div>
        </body>
        </html>

- create element, create root and render into existing HTML default snippet

        const div = React.createElement("div", {}, [
            React.createElement("h1", { id: "heading1" }, "Learn React!"),
            React.createElement("h2", { id: "heading2" }, " - Shashidhar Nagaral"),
        ]);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(div);

- [What is React element, exactly?](https://react.dev/reference/react/createElement#what-is-a-react-element-exactly)

  - An element is a lightweight description of a piece of the user interface. For example, both `<Greeting name="Taylor" />` and `createElement(Greeting, { name: 'Taylor' })` produce an object like this:

        // Slightly simplified
        {
            type: Greeting,
            props: {
            name: 'Taylor'
            },
            key: null,
            ref: null,
        }

  - **Note that creating this object does not render the Greeting component or create any DOM elements.**

  - A React element is more like a description—an instruction for React to later render the Greeting component. By returning this object from your App component, you tell React what to do next.

  - Creating elements is extremely cheap so you don’t need to try to optimize or avoid it.

- You should only pass children as multiple arguments to createElement if they are all statically known, like createElement('h1', {}, child1, child2, child3). If your children are dynamic, pass the entire array as the third argument: createElement('ul', {}, listItems).

        const h1 = React.createElement("h1", { id: "heading1" }, "Learn React!");
        const h2 = React.createElement("h2", { id: "heading2" }, " - Shashidhar Nagaral");
        const div = React.createElement("div", {}, h1, h2);

- Below code will show the warning: `Each child in a list should have a unique “key” prop.`

        const div = React.createElement("div", {}, [ React.createElement("h1", { id: "heading1" }, "Learn React!"),
        React.createElement("h2", { id: "heading2" }, " - Shashidhar Nagaral"),]);

## API References

- React.createElement: https://react.dev/reference/react/createElement
- React.createRoot: https://react.dev/reference/react-dom/client/createRoot

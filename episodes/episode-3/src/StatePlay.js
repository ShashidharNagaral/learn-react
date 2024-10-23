import CodeComponent from "../components/CodeComponent";
import { codes } from "../resource/codes";

export const StatePlay = () => {
  return (
    <div id="index-main">
      <CodeComponent
        heading={"Example 1"}
        onRun={(x, setX) => {
          setX(x + 1);
          setX((n) => {
            return n + 5;
          });
        }}
        code={codes[0]}
      />
      <CodeComponent
        heading={"Example 2"}
        onRun={(x, setX) => {
          setX((n) => {
            return n + 5;
          });
          setX(x + 1);
        }}
        code={codes[1]}
      />
      <CodeComponent
        heading={"Example 3"}
        onRun={(x, setX) => {
          setX((n) => {
            return n + 1;
          });
          setX((n) => {
            return n + 1;
          });
          setX((n) => {
            return n + 1;
          });
        }}
        code={codes[2]}
      />
    </div>
  );
};

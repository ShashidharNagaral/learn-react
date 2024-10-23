import { useState } from "react";
import { atomOneLight, CodeBlock } from "react-code-blocks";

const CodeBlockStyle = {
  height: "40vh",
  borderRadius: "8px",
  border: "1px solid",
};

export default function CodeComponent({ heading, onRun, code }) {
  const [number, setNumber] = useState(0);

  return (
    <div id="code-container-main">
      <div id="code-container">
        <div id="code-container-head">
          <div id="code-header">
            <label>{heading}</label>
          </div>
          <div id="code-block">
            <CodeBlock
              customStyle={CodeBlockStyle}
              text={code}
              language={"jsx"}
              theme={atomOneLight}
              showLineNumbers={true}
              codeBlock={true}
            />
          </div>
        </div>
        <div id="code-container-result">
          <label
            id="run-button"
            onClick={() => {
              onRun(number, setNumber);
            }}
          >
            Run
          </label>
          <label id="result-label">{number}</label>
        </div>
      </div>
    </div>
  );
}

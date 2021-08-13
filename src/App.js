import React, { useState } from "react";
import './App.css';
import Editor from "@monaco-editor/react";
import testRules from "./testRules";

function App() {

  const [fileName, setFileName] = useState("rule1.yaml");

  const rule = testRules[fileName];

  return (
    <>
      <button
        disabled={fileName === "rule1.yaml"}
        onClick={() => setFileName("rule1.yaml")}
      >
        rule1.yaml
      </button>
      <button
        disabled={fileName === "rule2.yaml"}
        onClick={() => setFileName("rule2.yaml")}
      >
        rule2.yaml
      </button>
      <button
        disabled={fileName === "rule3.yaml"}
        onClick={() => setFileName("rule3.yaml")}
      >
        rule3.yaml
      </button>
      <Editor
        height="80vh"
        theme="vs-dark"
        path={rule.name}
        defaultLanguage="yaml"
        defaultValue={rule.value}
      />
    </>
  );
}

export default App;

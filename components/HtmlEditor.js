import { Card } from "antd";
import React, { useState, useRef, useEffect } from "react";

export default function HtmlEditor() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const outputRef = useRef(null);
  useEffect(() => {
    const output = outputRef.current;
    if (output) {
      output.contentDocument.body.innerHTML =
        htmlCode + "<style>" + cssCode + "</style>";
    }
  }, [htmlCode, cssCode]);
  const run = () => {
    outputRef.current.contentWindow.eval(jsCode);
  };
  return (
    <div className="container flex flex-col">
      <div className="left flex  p-3">
        <Card className="input-card h-full m-3 bg-gray-100">
          <h2>HTML</h2>
          <textarea
            id="html_code"
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            className="w-[200px] h-[250px] outline-none bg-gray-100"
          />
        </Card>
        <Card className="input-card h-full m-3 bg-gray-100">
          <h2>CSS</h2>
          <textarea
            id="style_sheet"
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            className="w-[200px] h-[250px] outline-none bg-gray-100"
          />
        </Card>
        <Card className="input-card h-full m-3 bg-gray-100">
          <h2>JS</h2>
          <textarea
            id="JS_code"
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
            className="w-[200px] h-[250px] outline-none bg-gray-100"
          />
        </Card>
        <br />
      </div>
      <div className="flex">
        <button
          onClick={run}
          className="bg-green-600 text-white ml-auto my-1 mr-2 rounded-md p-2 text-sm"
        >
          Run JS
        </button>
      </div>

      <div className="right">
        <label>
          <i className="fa-solid fa-play"></i> Output
        </label>
        <hr />
        <iframe id="output" ref={outputRef}></iframe>
      </div>
    </div>
  );
}

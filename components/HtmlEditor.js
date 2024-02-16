import React, { useState, useRef, useEffect } from "react";
import d3 from "d3";

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
    <div className="container ">
      <div className="left">
        <label>
          <i className="fa-brands fa-html5"></i> HTML
        </label>
        <br />
        <textarea
          id="html_code"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        ></textarea>
        <br />
        <label>
          <i className="fa-brands fa-css3"></i> CSS
        </label>
        <br />
        <textarea
          id="style_sheet"
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
        ></textarea>
        <br />
        <label>
          <i className="fa-brands fa-js"></i> Javascript
        </label>
        <br />
        <textarea
          id="JS_code"
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}
        ></textarea>
        <button onClick={run}>Run</button>
        <br />
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

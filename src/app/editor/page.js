"use client";

import React from "react";
import CodeEditor from "../../../components/CodeEditor.jsx";
import HtmlEditor from "../../../components/HtmlEditor.js";

export default function page({ playgroundType, algoType }) {
  return (
    <div>
      {playgroundType == "web" ? (
        <HtmlEditor />
      ) : playgroundType == "dsa" ? (
        <CodeEditor />
      ) : playgroundType == "algo" ? (
        <iframe
          src={`algo/${algoType}`}
          frameBorder="0"
          className="w-full h-full"
        ></iframe>
      ) : (
        ""
      )}
    </div>
  );
}

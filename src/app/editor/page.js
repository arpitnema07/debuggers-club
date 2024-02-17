"use client";

import React from "react";
import CodeEditor from "../../../components/CodeEditor";
import HtmlEditor from "../../../components/HtmlEditor.js";

export default function page() {
  return (
    <div>
      {/* <iframe
        src="/algo/bst"
        frameBorder="0"
        className="w-full h-full"
      ></iframe> */}
      <HtmlEditor />
    </div>
  );
}

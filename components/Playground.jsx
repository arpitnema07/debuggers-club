import React from "react";
import Algo from "./Algo";
import CodeEditor from "./CodeEditor";
import HtmlEditor from "./HtmlEditor";

const Playground = ({ playgroundType }) => {
  return (
    <>
      {playgroundType == "dsa" ? (
        <CodeEditor />
      ) : playgroundType == "web" ? (
        <HtmlEditor />
      ) : (
        <Algo type={playgroundType} />
      )}
    </>
  );
};

export default Playground;

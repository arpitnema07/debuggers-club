"use client";

import React, { useEffect } from "react";
import Header from "../../../../../components/Header";
import CodeEditor from "../../../../../components/CodeEditor.jsx";
import Algo from "../../../../../components/Algo";
import Playground from "../../../../../components/Playground";
import { TiTickOutline } from "react-icons/ti";

const page = (props) => {
  console.log("props", props);
  const id = props?.params?.chapterSlug;
  useEffect(() => {
    if (id) {
      getSingleChapter();
    }
  }, [id]);
  const getSingleChapter = async () => {
    try {
    } catch (error) {}
  };
  const complete = async () => {};
  return (
    <div>
      <Header />
      {/* Code for chapters */}
      <div className="flex">
        <div className="p-2 w-1/2">
          <video
            controls={true}
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            className=""
          ></video>
          <h3 className="my-2 text-xl">Web Development Master Class </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            ducimus consectetur adipisicing elit ipsum dolor sit amet
            consectetur adipisicing elit. Rem, ducimus consectetur adipisicing
            elit.
          </p>
          <a
            href=""
            className="text-sm my-2  text-blue-600 hover:border-b-[1px] border-b-blue-500 "
            target="_blank"
          >
            view pdf
          </a>
        </div>
        <Playground playgroundType={"trie"} />
      </div>
      <span onClick={complete}>
        Mark as complete <TiTickOutline />
      </span>
    </div>
  );
};

export default page;

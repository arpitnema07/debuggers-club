"use client";

import React, { useEffect, useState } from "react";
import Header from "../../../../../components/Header";
import CodeEditor from "../../../../../components/CodeEditor.jsx";
import Algo from "../../../../../components/Algo";
import Playground from "../../../../../components/Playground";
import { TiTickOutline } from "react-icons/ti";
import axios from "axios";
import Cookies from "js-cookie";

const page = (props) => {
  const accessToken = Cookies.get("accessToken");
  const id = props?.params?.chapterSlug;
  const [singleChapter, setSingleChapter] = useState();
  useEffect(() => {
    if (id) {
      getSingleChapter();
    }
  }, [id]);
  const getSingleChapter = async () => {
    try {
      const { data } = await axios.get(`/api/chapters/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("data", data);
      setSingleChapter(data?.chapter);
    } catch (error) {
      console.log("error", error);
    }
  };
  const complete = async () => {};
  return (
    <div>
      <Header />
      {/* Code for chapters */}
      <div className="flex mb-10">

      
        <div className="p-2 w-1/2">
          <video
            controls={true}
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            className=""
          ></video>
          <h3 className="my-2 text-xl">{singleChapter?.name} </h3>
          <p className="text-sm">{singleChapter?.desc}</p>
          {singleChapter?.document && (
            <a
              href=""
              className="text-sm my-2  text-blue-600 hover:border-b-[1px] border-b-blue-500 "
              target="_blank"
            >
              view pdf
            </a>
          )}
        </div>
        <Playground playgroundType={singleChapter?.playgroundType} />
      </div>
      <button onClick={complete} className="flex gap-2 border text-sm rounded-lg justify-center items-center">
        Mark as complete <TiTickOutline />
      </button>
    </div>
  );
};

export default page;

"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import cardImage1 from "../../../../public/images/Web-Dev.jpg";
import Image from "next/image";
import user from "../../../../public/images/blank-profile-picture.webp";
import Footer from "../../../../components/Footer";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import moment from "moment";

const page = (props) => {
  console.log("props :>> ", props?.params?.blog);

  const accessToken = Cookies.get("accessToken");
  const [singleBlog, setSingleBlog] = useState();
  const router = useRouter();
  console.log("singleBlog :>> ", singleBlog);

  useEffect(() => {
    if (props?.params?.blog) {
      getSingleBlog();
    }
  }, [props?.params?.blog]);

  const getSingleBlog = async () => {
    try {
      const { data } = await axios.get(`/api/blogs/${props?.params?.blog}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("data", data);
      setSingleBlog(data?.blog);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <Header />
      <div className="my-10">
        <h2 className="font-semibold text-center text-2xl">
          {singleBlog?.title}{" "}
        </h2>
        {/* <img src={`${singleBlog?.userId?.profileImage}`} alt="uu" />
         */}
        <div className="mx-28 flex justify-center my-6 gap-6 text-center">
          {singleBlog?.userId?.profileImage ? (
            <img
              src={`http://localhost:3000/${singleBlog?.userId?.profileImage}`}
              className="w-12 h-12 rounded-full cursor-pointer "
              alt=""
            />
          ) : (
            <Image
              alt="aa"
              unoptimized
              src={user}
              className="w-12 h-12 rounded-full cursor-pointer "
            />
          )}

          <div className="">
            <h4 className="text-left text-lg">{singleBlog?.userId?.name}</h4>
            <p className="text-sm">
              Created on {moment(singleBlog?.createdAt).format("LLL")}
            </p>
          </div>
        </div>
        <div className="flex justify-center my-3">
          <img
            src={`http://localhost:3000/${singleBlog?.blogImage}`}
            alt="img"
            className="w-5/6 flex justify-center text-center"
          />
        </div>
        <div className="mx-28 ">
          <p>{singleBlog?.desc}</p>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

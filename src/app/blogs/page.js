"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import cardImage from "../../../public/images/image2.png";
import cardImage1 from "../../../public/images/Web-Dev.jpg";
import cardImage2 from "../../../public/images/react.js-img.png";
import cardImage3 from "../../../public/images/git-github.png";
import cardImage4 from "../../../public/images/css.png";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Link from "next/link";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useUserContext } from "../context/page";

const page = () => {
  const { search } = useUserContext();
  const router = useRouter();
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, [search]);

  const getAllBlogs = async () => {
    try {
      let apiUrl = "/api/blogs";
      if (search) {
        apiUrl += `?search=${search}`;
      }
      const { data } = await axios.get(apiUrl, {
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,
        // },
      });
      console.log("data :>> ", data);

      setAllBlogs(data?.blogs);
    } catch (error) {}
  };
  return (
    <div>
      <Header />
      {/* cards  */}
      <div className="w-full mb-10 mt-4">
        {/*       <div className="flex">
          <div className="border-gray-400 border-[1px] flex items-center rounded-md bg-white m-2 ml-auto">
            <input placeholder="search blogs.." className="m-2 outline-none	" />
            <div
              className="m-0 p-0 h-full flex items-center justify-center bg-gray-300 w-10"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            >
              <IoSearchOutline className=" m-0" onClick={getAllBlogs} />
            </div>
          </div>
        </div>*/}
        <div className="p-4">
          <div className="grid grid-cols-3 justify-between gap-16 mx-12">
            {/* card 1 */}
            {allBlogs?.map((blog, i) => {
              return (
                <>
                  <div className=" border-2 rounded-lg shadow-md">
                    <Image
                      src={cardImage1}
                      alt="card"
                      className="w-full rounded-lg"
                    />
                    <h2 className="text-xl font-normal px-4 mt-2">
                      {blog?.title}
                    </h2>
                    <p className="p-4 mt-2">{blog?.desc}</p>
                    <Link href={`/blogs/${blog?._id}`} className="text-green-500  px-4 mb-2">
                      Read More
                    </Link>
                  </div>
                </>
              );
            })}
            {!allBlogs ||
              (allBlogs?.length < 1 && <div>Blogs Not Found !!</div>)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

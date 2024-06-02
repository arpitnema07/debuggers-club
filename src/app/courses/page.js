"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import cardImage from "../../../public/images/back.png";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "../../../components/Footer";
import { toast } from "react-toastify";
import { IoSearchOutline } from "react-icons/io5";
import { useUserContext } from "../context/page";

const page = () => {
  const { search } = useUserContext();
  const accessToken = Cookies.get("accessToken");
  const router = useRouter();
  const [allCources, setAllCources] = useState([]);
  // const [searchKey, setSearchKey] = useState("");
  useEffect(() => {
    if (accessToken) {
      getAllCources();
    }
  }, [search]);

  const getAllCources = async () => {
    try {
      let apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses`;
      if (search) {
        apiUrl += `?search=${search}`;
      }
      const { data } = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setAllCources(data?.courses);
    } catch (error) {}
  };
  return (
    <div>
      <Header />
      <div className="mb-10 mt-4">
        {/*        <div className="flex">
          <div className="border-gray-400 border-[1px] flex items-center rounded-md bg-white m-2 ml-auto">
            <input
              type="search"
              placeholder="search courses.."
              className="m-2 outline-none	"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <div className="m-0 p-0 h-full flex items-center justify-center bg-gray-300 w-10">
              <IoSearchOutline className=" m-0" onClick={getAllCources} />
            </div>
          </div>
        </div>*/}
        {/* cards  */}
        <div className="w-full my-10">
          <div className="p-4">
            <div className="flex flex-col gap-5">
              {/* card 1 */}
              {allCources?.map((data, i) => {
                return (
                  <div
                    className="border-gray-400 rounded-lg border-1 flex mx-10 "
                    key={i}
                  >
                    <img src={`/${data?.image}`} alt="card" className="w-1/3" />
                    <div className="w-2/3 p-5">
                      <h2 className="text-2xl font-normal mb-2">
                        {data?.name}
                      </h2>
                      <p className="">{data?.shortDesc}</p>
                      <button
                        className="text-green-500 p-2"
                        onClick={() => {
                          router.push(`/courses/${data?._id}`);
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                );
              })}
              {!allCources ||
                (allCources?.length < 1 && <div>Course Not Found !!</div>)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

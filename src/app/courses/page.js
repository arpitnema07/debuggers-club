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
const page = () => {
  const accessToken = Cookies.get("accessToken");
  const router = useRouter();
  const [allCources, setAllCources] = useState([]);
  console.log("allCources :>> ", allCources);
  useEffect(() => {
    if (accessToken) {
      getAllCources();
    }
  }, []);

  const getAllCources = async () => {
    try {
      const { data } = await axios.get("/api/courses", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("data", data);
      setAllCources(data?.courses);
    } catch (error) {}
  };
  return (
    <div>
      <Header />
      <div className="my-10">
        {/* cards  */}
        <div className="w-full my-10">
          <div className="p-4">
            <div className="flex flex-col gap-5">
              {/* card 1 */}
              {allCources?.map((data, i) => {
                console.log("data?.images", data);
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

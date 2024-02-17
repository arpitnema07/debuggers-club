"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import cardImage from "../../../public/images/image2.png";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

const page = () => {
  const accessToken = Cookies.get("accessToken");
  const router = useRouter();
  const [allCources, setAllCources] = useState([]);
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
      <div>
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
                    <Image src={cardImage} alt="card" className="w-1/3" />
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
    </div>
  );
};

export default page;

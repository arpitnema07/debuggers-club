import React, { useEffect, useState } from "react";
import Image from "next/image";
import cardImage from "../public/images/dashboard.svg";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useUserContext } from "@/app/context/page";
const Hero = () => {
  const { search } = useUserContext();
  const [allCources, setAllCources] = useState([]);

  useEffect(() => {
    getAllCources();
  }, [search]);

  const getAllCources = async () => {
    try {
      let url = "/api/courses";
      if (search) {
        url += `?search=${search}`;
      }
      const { data } = await axios.get(url);
      console.log("data", data);
      setAllCources(data?.courses);
    } catch (error) {}
  };
  console.log("search", search);
  return (
    <>
      <div>
        {/* top section  */}
        {(!search || search === "") && (
          <div className="flex gap-4 mt-4">
            <div className="w-1/2">
              <Image src={cardImage} alt="img" className="w-full ml-4 p-l" />
            </div>
            <div className="w-1/2 px-8 ">
              <p className="font-semibold text-center my-5 text-[24px] mt-12 pt-12">
                Welcome To Edbuggers !!
              </p>
              <p className="mb-3 mt-2 pt-2 text-center">
                {" "}
                Begin your learning journey with us.
              </p>
              <p className="mb-3 mt-2 pt-2 text-center justify-spac">
                Gain Access to video content, theory materials, and a coding
                playground. Experience visual algorithm representation and
                personalized one-on-one mentorshio. We're your exclusive source
                for comprehensive learning resources and support. Start coding
                with confidence today !
              </p>
            </div>
          </div>
        )}

        {/* cards  */}
        <div className="w-full my-10">
          <div className="p-4">
            <h2 className="text-center text-2xl font-semibold mb-6">
              Our Courses
            </h2>
            <div className="grid grid-cols-3 justify-between gap-16 mx-12">
              {/* card 1 */}
              {allCources?.map((data, i) => {
                return (
                  <div className=" border-2 ">
                    <img
                      src={`/${data?.image}`}
                      alt="card"
                      className="w-full"
                    />
                    <h2 className="text-xl font-normal p-2">{data?.name}</h2>
                    <p className="p-2">{data?.shortDesc}</p>
                    <Link
                      href={`/courses/${data?._id}`}
                      className="text-green-500 p-2"
                    >
                      Read More
                    </Link>
                  </div>
                );
              })}
              {!allCources ||
                (allCources?.length < 1 && <div>Course Not Found !!</div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

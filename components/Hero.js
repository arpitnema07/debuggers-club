import React, { useEffect, useState } from "react";
import HeroImage from "../public/images/image1.jpeg";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import cardImage from "../public/images/banner.jpg";
import cardImage1 from "../public/images/Web-Dev.jpg";
import cardImage2 from "../public/images/react.js-img.png";
import cardImage3 from "../public/images/git-github.png";
import cardImage4 from "../public/images/css.png";
import cardImage5 from "../public/images/course1.png";

import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
const Hero = () => {
  const accessToken = Cookies.get("accessToken");
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
    <>
      <div>
        {/* top section  */}
        <div className="flex gap-4 mt-4">
          <div className="w-1/2">
            <Image src={cardImage} alt="img" className="w-full" />
          </div>
          <div className="w-1/2 px-8 ">
            <p className="font-semibold text-center my-5 text-[24px]">
              Learn with us, we provide learing with Fun and User
              Interactibility
            </p>
            <p className="mb-3">
              {" "}
              Having mentors who can help direct and talk you through how to
              balance your time wisely makes a huge difference. Mentors can help
              ensure mentees are continuously learning over time and keeping
              skills relevant by sharing tips and valuable resources, and by
              making sure they understand it’s impossible to know everything.
              All one can do is learn every day and keep your mind open and
              enjoy the process of taking on new challenges!
            </p>
            <p className="mb-3">
              We offer subscription-based support for one-on-one mentorship,
              enabling students to speak with mentors directly about any
              problems they are having. Additionally, mentors can provide
              students with a range of tech-related advice that can help them
              learn continuously and maintain their motivation as they study.
            </p>
          </div>
        </div>

        {/* cards  */}
        <div className="w-full my-10">
          <div className="p-4">
            <h2 className="text-center text-2xl font-semibold mb-6">
              Our Courses
            </h2>
            <div className="grid grid-cols-2 justify-between gap-32 mx-28">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

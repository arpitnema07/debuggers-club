"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import Image from "next/image";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useRouter } from "next/navigation";
import Reviews from "../../../../components/Reviews";
import axios from "axios";
import Cookies from "js-cookie";
import cardImage from "../../../../public/images/course2.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaAngleDown } from "react-icons/fa6";
import moment from "moment";
import { CiCalendarDate } from "react-icons/ci";
import Link from "next/link";
import Footer from "../../../../components/Footer";
import user from "../../../../public/images/blank-profile-picture.webp";

const page = (props) => {
  const accessToken = Cookies.get("accessToken");
  const [singleCources, setSingleCources] = useState();
  const router = useRouter();

  useEffect(() => {
    if (props?.params?.course) {
      getSingleCourses();
    }
  }, [props?.params?.course]);

  const getSingleCourses = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses/${props?.params?.course}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("data", data);
      setSingleCources(data?.course[0]);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <Header />
      <div className="py-4">
        <div className="flex gap-2 my-3">
          <div className="ml-auto">
            {/* <button className="text-white bg-blue-700  rounded-md py-2 px-4 ">Enroll Now</button> */}
            <Link href={"/call/mentor"}>
              <button className="text-white bg-blue-700 ml-auto rounded-md py-2 px-4 mr-4">
                Call A Mentor
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex px-5 mb-6">
          <img src={`/${singleCources?.image}`} alt="img" className="w-1/3 " />
          <div className="px-10 w-2/3 ">
            {" "}
            <h3 className="mb-3 text-2xl font-semibold">
              {singleCources?.name}{" "}
            </h3>
            <p className="text-gray-700 my-4">{singleCources?.shortDesc}</p>
            <div className="flex gap-4 justify-between items-center text-sm text-gray-500">
              <p className="flex gap-2 items-center text-sm">
                {" "}
                <span>
                  <CiCalendarDate />
                </span>
                <span>Created On </span>{" "}
                <span> {moment(singleCources?.createdAt).format("ll")} </span>{" "}
              </p>
              <p>
                {" "}
                <span>Enrolled Students :</span>
                <span>{singleCources?.enrolledUsers?.length}</span>{" "}
              </p>
              <p>
                {" "}
                <span>Difficulty Level :</span>{" "}
                <span>{singleCources?.difficulty}</span>{" "}
              </p>
            </div>
            <ul className="flex font-medium my-3 text-gray-400 px-3 gap-3">
              {/* <span>Tags</span> */}
              {singleCources?.tags?.map((data) => {
                return <li className="	"> {data}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="px-8">
          <h3 className="text-lg font-bold my-4">Course Content</h3>
          <p className="text-sm mb-2">
            {singleCources?.chapters?.length} Chapters
          </p>
        </div>
        {singleCources?.chapters?.map((data, i) => {
          return (
            <>
              <div className="px-8 ">
                <Accordion
                  className="border-gray-200 border-[1px]"
                  defaultExpanded
                >
                  <AccordionSummary
                    expandIcon={<FaAngleDown />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    {data?.name}
                  </AccordionSummary>
                  <hr className="border-gray-200 border-[1px]" />
                  <AccordionDetails className="flex gap-6">
                    <div
                      className="cursor-pointer w-5 h-5"
                      onClick={() => {
                        router.push(`/courses/chapter/${data?._id}`);
                      }}
                    >
                      <MdOutlineOndemandVideo className="w-6 h-6" />
                    </div>
                    {/* {data?.desc} */}
                    <p className="text-sm"> {data?.desc}</p>
                    <p className="ml-auto text-sm cursor-pointer hover:border-b-[1px] hover:border-blue-600 hover:text-blue-600 ">
                      view video
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            </>
          );
        })}

        <div className="mb-4">
          {/* <Reviews /> */}
          <div className="mx-10">
            <hr className="my-4 text-gray-500" />
            <h3 className="flex items-center text-xl  mb-4">Reviews</h3>

            {singleCources?.reviews?.map((review, i) => {
              return (
                <>
                  <div>
                    <div>
                      <div className="flex gap-2 ">
                        {review?.user?.profileImage ? (
                          <img
                            alt="aa"
                            unoptimized
                            src={`/${review?.user?.profileImage}`}
                            className="w-12 h-12 rounded-full"
                          />
                        ) : (
                          <Image
                            alt="aa"
                            unoptimized
                            src={user}
                            className="w-12 h-12 rounded-full"
                          />
                        )}
                        <div>
                          <div className="">
                            <p>{review?.user?.name}</p>
                            <p className="text-[12px] text-gray-400">
                              created on{" "}
                              <span>
                                {moment(review?.createdAt).format("LLL")}
                              </span>
                            </p>
                          </div>
                          <div className="w-2/3 mt-3 text-gray-700 text-[12px]">
                            <p>{review?.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

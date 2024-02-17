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

const page = (props) => {
  const accessToken = Cookies.get("accessToken");
  const [singleCources, setSingleCources] = useState();
  const router = useRouter();
  console.log("props", props?.params?.course);

  useEffect(() => {
    if (props?.params?.course) {
      getSingleCourses();
    }
  }, [props?.params?.course]);

  const getSingleCourses = async () => {
    try {
      const { data } = await axios.get(
        `/api/courses/${props?.params?.course}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // console.log("data", data);
      setSingleCources(data?.courses[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Header />
      <div className="pt-4">
        <div className="flex gap-2 my-3">
          <div className="ml-auto">
            {/* <button className="text-white bg-blue-700  rounded-md py-2 px-4 ">Enroll Now</button> */}
            <button className="text-white bg-blue-700 ml-auto rounded-md py-2 px-4 mr-4">
              Call A Mentor
            </button>
          </div>
        </div>
        <div className=" flex px-5 mb-6">
          <Image src={cardImage} alt="img" className="w-1/3 " />
          <div className="px-10 w-2/3 ">
            {" "}
            <h3 className="mb-3 text-2xl font-semibold">{singleCources?.name} </h3>
            <p className="text-gray-700 my-4">{singleCources?.shortDesc}</p>
             
            <div className="flex gap-4 justify-around items-center text-sm text-gray-500">
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
          <p className="text-sm mb-2">{singleCources?.chapters?.length} Chapters</p>
        </div>
        {singleCources?.chapters?.map((data, i) => {
          console.log("name", data);
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
                    <p className="text-sm">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </p>
                    <p className="ml-auto text-sm cursor-pointer hover:border-b-[1px] hover:border-blue-600 hover:text-blue-600 ">
                      view video
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            </>
          );
        })}

        <div>
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default page;

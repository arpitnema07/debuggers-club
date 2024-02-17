"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import cardImage from "../../../../public/images/image2.png";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import Reviews from "../../../../components/Reviews";
import axios from "axios";
import Cookies from "js-cookie";

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
      console.log("data", data);
      setSingleCources(data?.courses[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("singleCources", singleCources);
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
          <div className="px-5 w-2/3">
            {" "}
            <h3 className="mb-3">Web Development Master Class </h3>
            <p>{singleCources?.shortDesc}</p>
            <div>
              <p>
                {" "}
                <span>Created On </span>{" "}
                <span> {singleCources?.createdAt}</span>{" "}
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
              <p>
                {" "}
                <span> Category : </span>
                {singleCources?.tags?.map((data) => {
                  return <span>{data}</span>;
                })}
              </p>
            </div>
          </div>
        </div>
        {singleCources?.chapters?.map((data, i) => {
          return (
            <div className="px-5">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Chapter - 1</Accordion.Header>
                  <Accordion.Body className="flex gap-4">
                    <div
                      className="cursor-pointer w-5 h-5"
                      onClick={() => {
                        router.push(`/courses/chapter/${data?._id}`);
                      }}
                    >
                      <MdOutlineOndemandVideo />
                    </div>
                    <div className="">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
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

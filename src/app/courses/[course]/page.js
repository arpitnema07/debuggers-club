"use client";
import React from "react";
import Header from "../../../../components/Header";
import cardImage from "../../../../public/images/image2.png";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useRouter } from "next/navigation";
import Reviews from "../../../../components/Reviews";

const page = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="pt-4">
        <div className=" flex px-5 mb-6">
          <Image src={cardImage} alt="img" className="w-1/3 " />
          <div className="px-5 w-2/3">
            {" "}
            <h3 className="mb-3">Web Development Master Class </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae at
              cupiditate dolore animi consequuntur exercitationem et adipisci
              dolores quisquam, totam aut, consequatur non eos molestiae!
              Voluptatem.
            </p>
            <div>
              <p>
                {" "}
                <span>Created On </span> <span> 02/01/2024</span>{" "}
              </p>
              <p>
                {" "}
                <span>Enrolled Students :</span>
                <span>2</span>{" "}
              </p>
              <p>
                {" "}
                <span>Difficulty Level :</span> <span>Moderate</span>{" "}
              </p>
              <p>
                {" "}
                <span> Category : </span> <span>Web Development</span>
              </p>
            </div>
          </div>
        </div>
        <div className="px-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Chapter - 1</Accordion.Header>
              <Accordion.Body className="flex gap-4">
                <div
                  className="cursor-pointer w-5 h-5"
                  onClick={() => {
                    router.push("/courses/chapter/1");
                  }}
                >
                  <MdOutlineOndemandVideo />
                </div>
                <div className="">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Chapter - 2</Accordion.Header>
              <Accordion.Body className="flex gap-4">
                <div className="cursor-pointer w-5 h-5">
                  <MdOutlineOndemandVideo />
                </div>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default page;

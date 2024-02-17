"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";
import user from "../public/images/blank-profile-picture.webp";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Header = () => {
  const router = useRouter();
  const [isToken, setIsToken] = useState();
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      setIsToken(token);
    }
    console.log("token :>> ", token);
  }, [isToken]);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="flex  justify-center items-center bg-gray-100 p-4 shadow-md">
        <div
          className="w-1/2 cursor-pointer font-serif text-blue-600 font-bold text-lg "
          onClick={() => {
            router.push("/");
          }}
        >
          Debuggers Club
        </div>
        <div className="w-1/2 ">
          <div className="flex gap-4 justify-evenly items-center">
            <div
              className="cursor-pointer"
              onClick={() => {
                router.push("/courses");
              }}
            >
              Courses
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                router.push("/blogs");
              }}
            >
              Blogs
            </div>

            <div
              className="cursor-pointer"
              onClick={() => {
                router.push("/about-us");
              }}
            >
              About Us
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Contact Us
            </div>
            {!isToken ? (
              <>
                <div className="">
                  <Link
                    href="/login"
                    className="mr-4 bg-green-500 text-white font-semibold rounded-md py-3 px-4"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="bg-blue-500 text-white font-semibold rounded-md py-3 px-4"
                  >
                    Register
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Image
                    alt="aa"
                    unoptimized
                    src={user}
                    className="w-12 h-12 rounded-full cursor-pointer "
                    onClick={handleShow}
                  />
                  {show && (
                    <div className="absolute z-10 right-16 mt-2 w-28 top-16 bg-white rounded-md overflow-hidden">
                      <button
                        className="flex bg-gray-300 w-28 px-4 py-2 text-sm "
                        onClick={() => {
                          router.push("/profile");
                        }}
                      >
                        User Profile
                      </button>
                      <hr />
                      <button className="flex items-center gap-2 bg-gray-300 w-28 px-4 py-2 text-sm">
                        Logout <FaArrowRightFromBracket className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

{
  /* <select className={show ? "visited" : "hidden"}>
                        <option>
                          <Link href={"/profile"}>Profile</Link>
                        </option>
                        <option>Logout</option>
                      </select> */
}

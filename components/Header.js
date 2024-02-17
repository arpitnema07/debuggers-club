"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import temp from "../public/images/blank-profile-picture.webp";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useUserContext } from "@/app/context/page";

const Header = () => {
  const router = useRouter();
  const { user } = useUserContext();
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

  const logout = () => {
    Cookies.remove("accessToken");
    router.push("/login");
  };

  return (
    <>
      <div className="flex items-center  justify-bewteen items-center bg-gray-100 p-4 shadow-md">
        <div
          className="w-1/3 cursor-pointer font-serif text-blue-600 font-bold text-lg "
          onClick={() => {
            router.push("/");
          }}
        >
          Debuggers Club
        </div>
        <div className="flex w-2/3 items-center">
          <div className="flex gap-3 justify-between mx-4">
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
          </div>

          <div className="ml-auto">
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
              <div className="flex gap-2">
                <div className="border-gray-400 border-[1px] flex items-center rounded-md  ">
                  <input placeholder="search..." className="m-2" />
                  <IoSearchOutline className="bg-gray-300 m-0" />
                </div>
                <div>
                  <image
                    alt="aa"
                    unoptimized
                    src={isToken ? user?.profileImage : temp}
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
                      <button
                        className="flex items-center gap-2 bg-gray-300 w-28 px-4 py-2 text-sm"
                        onClick={logout}
                      >
                        Logout <FaArrowRightFromBracket className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className="flex">
          <div className="flex-initial gap-4 justify-evenly items-center">
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
            <div class="border-[1px] border-gray-300 my-2 mx-4">
              <input type="text" placeholder="Search.." />
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
                      <button
                        className="flex items-center gap-2 bg-gray-300 w-28 px-4 py-2 text-sm"
                        onClick={logout}
                      >
                        Logout <FaArrowRightFromBracket className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div> */}
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

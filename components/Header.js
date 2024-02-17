import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex m-4 justify-center items-center">
        <div
          className="w-1/2 cursor-pointer"
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
            <div>Blogs</div>
            <div>Discussion</div>
            <div>Code Editor</div>
            <div>
              <p>pic</p>
              <select className="">
                <option>
                  <Link href={"/profile"}>Profile</Link>
                </option>
                <option>Logout</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

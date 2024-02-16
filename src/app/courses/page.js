"use client";
import React from "react";
import Header from "../../../components/Header";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import cardImage from "../../../public/images/image2.png";

const page = () => {
  return (
    <div>
      <Header />
      <div>
        {/* cards  */}
        <div className="w-full my-10">
          <div className="p-4">
            <div className="flex flex-col gap-5">
              {/* card 1 */}
              <div className="border-gray-400 rounded-lg border-1 flex mx-10 ">
                <Image src={cardImage} alt="card" className="w-1/3" />
                <div className="w-2/3 p-5">
                  <h2 className="text-2xl font-normal mb-2">
                    This is card Heading
                  </h2>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae a, pariatur quo quos itaque maxime, inventore
                    perspiciatis totam fuga praesentium maiores laboriosam illo
                    cumque quae, dolorum ratione ab illum harum.ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae a, pariatur quo quos itaque maxime, inventore
                    perspiciatis totam fuga praesentium maiores laboriosam illo
                    cumque quae, dolorum ratione ab illum harum.
                  </p>
                  <button className="text-green-500 p-2">Read More</button>
                </div>
              </div>
              {/* card 2 */}
              <div className="border-gray-400 rounded-lg border-1 flex mx-10">
                <Image src={cardImage} alt="card" className="w-1/3" />
                <div className="w-2/3 p-5">
                  <h2 className="text-2xl font-normal mb-2">
                    This is card Heading
                  </h2>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae a, pariatur quo quos itaque maxime, inventore
                    perspiciatis totam fuga praesentium maiores laboriosam illo
                    cumque quae, dolorum ratione ab illum harum.ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae a, pariatur quo quos itaque maxime, inventore
                    perspiciatis totam fuga praesentium maiores laboriosam illo
                    cumque quae, dolorum ratione ab illum harum.
                  </p>
                  <button className="text-green-500 p-2">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
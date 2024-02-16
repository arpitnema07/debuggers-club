"use client";
import React from "react";
import Header from "../../components/Header";
import HeroImage from "../../public/images/image1.jpeg";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import cardImage from "../../public/images/image2.png";
const page = () => {
  return (
    <div>
      <Header />
      {/* top section  */}
      <div className="flex gap-4 mt-4">
        <div className="w-1/2">
          <Image src={HeroImage} alt="img" className="w-full" />
        </div>
        <div className="w-1/2 px-8 ">
          <p className="font-semibold text-center my-5 text-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mb-3">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            sequi adipisci necessitatibus porro fugiat temporibus illo, magnam
            laboriosam facere ullam perspiciatis ea consectetur, eveniet quod
            corrupti! Distinctio est reprehenderit praesentium.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            sequi adipisci necessitatibus porro fugiat temporibus illo, magnam
            laboriosam facere ullam perspiciatis ea consectetur, eveniet quod
            corrupti! Distinctio est reprehenderit praesentium.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            sequi adipisci necessitatibus porro fugiat temporibus illo, magnam
            laboriosam facere ullam perspiciatis ea consectetur, eveniet quod
            corrupti! Distinctio est reprehenderit praesentium.
          </p>
        </div>
      </div>

      {/* cards  */}
      <div className="w-full my-10">
        <div className="p-4">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Our Courses 
          </h2>
          <div className="flex justify-evenly ">
            {/* card 1 */}
            <div className="w-1/5 border-2 ">
              <Image src={cardImage} alt="card" className="w-full" />
              <h2 className="text-xl font-normal p-2">This is card Heading</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae a, pariatur quo quos itaque maxime, inventore
                perspiciatis totam fuga praesentium maiores laboriosam illo
                cumque quae, dolorum ratione ab illum harum.
              </p>
              <button className="text-green-500 p-2">Read More</button>
            </div>
            {/* card 2 */}
            <div className="w-1/5 border-2 ">
              <Image src={cardImage} alt="card" className="w-full" />
              <h2 className="text-xl font-normal p-2">This is card Heading</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae a, pariatur quo quos itaque maxime, inventore
                perspiciatis totam fuga praesentium maiores laboriosam illo
                cumque quae, dolorum ratione ab illum harum.
              </p>
              <button className="text-green-500 p-2">Read More</button>
            </div>
            {/* card 3 */}
            <div className="w-1/5 border-2 ">
              <Image src={cardImage} alt="card" className="w-full" />
              <h2 className="text-xl font-normal p-2">This is card Heading</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae a, pariatur quo quos itaque maxime, inventore
                perspiciatis totam fuga praesentium maiores laboriosam illo
                cumque quae, dolorum ratione ab illum harum.
              </p>
              <button className="text-green-500 p-2">Read More</button>
            </div>
            <div className="w-1/5 border-2 ">
              <Image src={cardImage} alt="card" className="w-full" />
              <h2 className="text-xl font-normal p-2">This is card Heading</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
  );
};

export default page;

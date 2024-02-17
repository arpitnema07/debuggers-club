"use client";
import React from "react";
import Image from "next/image";
import user from "../public/images/blank-profile-picture.webp";
const Reviews = () => {
  return (
    <div className="mx-10">
      <hr className="my-4 text-gray-500" />
      <h3 className="flex items-center text-xl  mb-4">Reviews</h3>
      <div>
        <div>
          <div className="flex gap-2 ">
            <Image
              alt="aa"
              unoptimized
              src={user}
              className="w-12 h-12 rounded-full"
            />
            <div>
            <div className="">
              <p>John Doe</p>
              <p className="text-[12px] text-gray-400">
                created on <span>02/01/24</span> <span>at </span>{" "}
                <span>01:33 PM</span>
              </p>
            </div>
            <div className="w-2/3 mt-3 text-gray-700 text-[12px]">
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              laudantium delectus corporis voluptate dolores! Quibusdam
              assumenda quam, natus corrupti sapiente repellendus, accusamus
              sunt neque, atque fugiat itaque. Mollitia, ad nostrum.
            </p>{" "}
          </div>
          </div>
          </div>

        </div>
        <hr  className="my-4"/>
        
      </div>
      <div>
        <div>
          <div className="flex gap-2 ">
            <Image
              alt="aa"
              unoptimized
              src={user}
              className="w-12 h-12 rounded-full"
            />
            <div>
            <div className="">
              <p>John Doe</p>
              <p className="text-[12px] text-gray-400">
                created on <span>02/01/24</span> <span>at </span>{" "}
                <span>01:33 PM</span>
              </p>
            </div>
            <div className="w-2/3 mt-3 text-gray-700 text-[12px]">
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              laudantium delectus corporis voluptate dolores! Quibusdam
              assumenda quam, natus corrupti sapiente repellendus, accusamus
              sunt neque, atque fugiat itaque. Mollitia, ad nostrum.
            </p>{" "}
          </div>
          </div>
          </div>

        </div>
        <hr  className="my-4"/>
        
      </div>
      <div>
        <div>
          <div className="flex gap-2 ">
            <Image
              alt="aa"
              unoptimized
              src={user}
              className="w-12 h-12 rounded-full"
            />
            <div>
            <div className="">
              <p>John Doe</p>
              <p className="text-[12px] text-gray-400">
                created on <span>02/01/24</span> <span>at </span>{" "}
                <span>01:33 PM</span>
              </p>
            </div>
            <div className="w-2/3 mt-3 text-gray-700 text-[12px]">
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              laudantium delectus corporis voluptate dolores! Quibusdam
              assumenda quam, natus corrupti sapiente repellendus, accusamus
              sunt neque, atque fugiat itaque. Mollitia, ad nostrum.
            </p>{" "}
          </div>
          </div>
          </div>

        </div>
        <hr  className="my-4"/>
        
      </div>
    </div>
  );
};

export default Reviews;

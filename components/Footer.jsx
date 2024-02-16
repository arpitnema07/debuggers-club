import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white p-6">
        <div className="text-center ">
          <h4 className="text-center mb-4">Our Contributers</h4>
          <div className="flex flex-wrap  justify-center  gap-5">
            {" "}
            <p className="flex  gap-2">
              {" "}
              <FaGithub className="w-5 h-5" />
              arpitnema07
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaGithub className="w-5 h-5" />
              souravmalviya379
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaGithub className="w-5 h-5" />
              swatikanathe09
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaGithub className="w-5 h-5" />
              Sanyogitay
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaGithub className="w-5 h-5" />
              SANDHYAGINARE
            </p>
          </div>
        </div>
        <div className="my-3 text-center">
         <p>Copyright © 2024 | All rights Reseved</p> 
        </div>
      </div>
    </>
  );
};

export default Footer;

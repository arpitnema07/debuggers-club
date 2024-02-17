import React from "react";
import Header from "../../../../components/Header";
import cardImage from "../../../../public/images/image2.png";
import Image from "next/image";
import user from "../../../../public/images/blank-profile-picture.webp";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-5">
        <h2 className="font-semibold text-center text-2xl">
          Web Development Roadmap
        </h2>
        <div className="mx-28 flex justify-center my-6 gap-6 text-center">
          <Image
            alt="aa"
            unoptimized
            src={user}
            className="w-12 h-12 rounded-full cursor-pointer "
          /> 
          <div className="">
          <h4 className="text-left text-lg">Sandhya Ginare</h4>
          <p className="text-sm">Created on 02/02/2024</p>
          </div>
        </div>
        <div className="flex justify-center my-3">
          <Image
            src={cardImage}
            alt="img"
            className="w-5/6 flex justify-center text-center"
          />
        </div>
        <div className="mx-28 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsa
            necessitatibus, facere minima modi corporis esse dolor laborum illum
            harum quia nemo cupiditate saepe! Atque libero magni amet, ipsa
            suscipit, iure exercitationem est eaque laborum sed, praesentium
            voluptates ratione dolores error maiores quis incidunt fugiat. Illum
            impedit eos similique aspernatur veniam veritatis amet, nostrum
            autem qui magni quaerat, voluptas commodi et adipisci culpa atque
            alias ipsam debitis eligendi. Dolorum qui alias asperiores quis.
            Cupiditate consequatur rerum incidunt, est exercitationem minima.
            Similique iure velit ut at sunt quisquam sit, recusandae dolore!
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
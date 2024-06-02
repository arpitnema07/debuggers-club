import React from "react";

const Algo = ({ type }) => {
  return (
    <>
      <iframe
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/algo/${type}`}
        frameBorder="0"
        className="w-1/2 h-100 p-2"
      ></iframe>
    </>
  );
};

export default Algo;

import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LeatesNews = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-gray-100 w-fit mx-auto">
      <span className="bg-pink-600 text-white font-bold rounded-md py-2 px-4">
        Latest
      </span>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas
          quia laborum? Dolorem, ipsa
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas
          quia laborum? Dolorem, ipsa
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas
          quia laborum? Dolorem, ipsa
        </Link>
      </Marquee>
    </div>
  );
};

export default LeatesNews;

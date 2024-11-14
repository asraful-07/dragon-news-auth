import React from "react";
import fb from "../assets/images/fb.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

const FindUs = () => {
  return (
    <div className="mt-20">
      <h2 className="text-xl flex items-center justify-center font-bold bg-gray-100 p-2 mb-4 rounded-md shadow-sm">
        Find Us On
      </h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <span>
            <img src={fb} alt="" />
          </span>{" "}
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <span>
            <img src={instagram} alt="" />
          </span>
          instagram
        </button>
        <button className="btn join-item justify-start">
          <span>
            <img src={twitter} alt="" />
          </span>
          instagram twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;

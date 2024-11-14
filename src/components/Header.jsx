import React from "react";
import logo from "../assets/images/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center flex-col gap-2 py-10 text-center">
        <img className="w-[300px] max-w-full" src={logo} alt="Logo" />
        <h4 className="text-lg font-medium">
          Journalism Without Fear or Favour
        </h4>
        <p className="text-base font-semibold">
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </p>
      </div>
    </div>
  );
};

export default Header;

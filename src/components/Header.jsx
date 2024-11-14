import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center flex-col gap-2 py-10 text-center">
        <img className="w-[300px] max-w-full" src={logo} alt="Logo" />
        <p className="text-lg font-medium">Journalism Without Fear or Favour</p>
        <h4 className="text-base font-semibold">
          Sunday, <span>November 27, 2022</span>
        </h4>
      </div>
    </div>
  );
};

export default Header;

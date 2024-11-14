import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl flex items-center justify-center font-bold bg-gray-100 p-2 mb-4 rounded-md shadow-sm">
        Login with
      </h2>
      <div className="flex flex-col gap-3">
        <button className="btn flex items-center justify-center gap-2 bg-green-500 text-white hover:bg-green-600 transition-colors duration-200 rounded-md p-2">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn flex items-center justify-center gap-2 bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-200 rounded-md p-2">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

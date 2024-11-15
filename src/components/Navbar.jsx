import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import user from "../assets/images/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center p-4">
      <div className="logo-container">{user.name}</div>
      <div className="space-x-6 text-lg font-medium">
        <NavLink to="/" className="hover:text-blue-500">
          Home
        </NavLink>
        <NavLink to="/Career" className="hover:text-blue-500">
          Career
        </NavLink>
        <NavLink to="/About" className="hover:text-blue-500">
          About
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <span>
          <img src={user} alt="User avatar" className="w-9 h-9 rounded-full" />
        </span>
        <Link
          to="/auth/login"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

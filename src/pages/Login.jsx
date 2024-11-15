import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // Clear the form inputs
    e.target.reset();
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-6">
          <form onSubmit={handelLogin} className="card-body">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Login to your account
            </h1>
            <div className="divider"></div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered text-lg"
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered text-lg"
                required
              />
              <label className="label mt-2">
                <a href="#" className="label-text-alt link link-hover text-sm">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                Login
              </button>
            </div>
            <p className="p-4 text-black text-sm">
              Dont’t Have An Account ?{" "}
              <Link to="/auth/register" className="text-red-600 font-semibold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <>
      <div className="h-screen bg-AI bg-no-repeat object-cover  flex justify-center items-center">
        <div className="w-6/12 m-auto bg-black/60  rounded-xl shadow-xl text-white p-4 flex flex-col gap-10">
          <div className="flex justify-between  ">
            <span className="h-12 w-12 rounded-full">
              <Link to="/">
                <img
                  className="w-full h-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
                  alt=""
                />
              </Link>
            </span>
            <span></span>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2  ">
              <label htmlFor="name">UserName</label>
              <input
                className="rounded"
                placeholder="Enter Your Name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2  ">
              <label htmlFor="name">Password</label>
              <input className="rounded" placeholder="****" type="password" />
            </div>
            <Link to="/admin/dashboard">
              <button className="px-4 py-2 rounded bg-green-400 text-white">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;

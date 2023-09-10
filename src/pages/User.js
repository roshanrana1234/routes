import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <div>
        <h1>This is All Users Section</h1>
        <ul className="flex flex-col gap-4">
          <Link to="/users/1">
            <li className="text-xl font-bold ">User One </li>
          </Link>
          <Link to="/users/2">
            <li className="text-xl font-bold ">User Two</li>
          </Link>
          <Link to="/users/3">
            <li className="text-xl font-bold ">User Three</li>
          </Link>
          <Link to="/users/rti564kf35kfk45f">
            <li className="text-xl font-bold ">Lenovo (i5 10th generation)</li>
          </Link>
          <Link to="/users/5">
            <li className="text-xl font-bold ">User Five</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default User;

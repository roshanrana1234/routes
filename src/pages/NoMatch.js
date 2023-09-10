import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col gap-6">
        <h1 className="text-red-500 font-bolt text-6xl"> Page Not found </h1>
        <Link to="/">
          <button className="px-4 py-2 bg-green-600 text-white">
            Go Back To Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default NoMatch;

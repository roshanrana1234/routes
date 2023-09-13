import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col gap-6 items-center">
          <span className="text-5xl font-bold text-red-500 ">
            Page Not Found
          </span>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded bg-green-800 hover:bg-green-500 text-white active:text-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;

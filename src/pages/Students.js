import React from "react";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-3 items-center">
        {/* <Link to="/student/roshan"> */}
        <Link to="roshan">
          <span>Roshan </span>
        </Link>
        <Link to="abhilasha">
          <span>Abhilasha</span>
        </Link>

        <Link to="nidhi">
          <span>Nidhi</span>
        </Link>

        <Link to="khushi">
          <span>Khushi</span>
        </Link>
      </div>
    </>
  );
};

export default Students;

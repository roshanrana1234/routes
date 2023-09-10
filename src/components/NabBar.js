import React from "react";
import { Link, NavLink } from "react-router-dom";

const NabBar = () => {
  return (
    <>
      <nav className="flex gap-4 p-4 bg-gray-300">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </>
  );
};

export default NabBar;

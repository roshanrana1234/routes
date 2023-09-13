import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="flex bg-gray-600 justify-between px-10 p-4 text-white">
        <span>Logo</span>
        <ul className="flex  gap-5">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="about">
            <li>About</li>
          </NavLink>
          <NavLink to="contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="product">
            <li>Product</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;

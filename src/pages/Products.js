import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full justify-start items-center bg-green-800 h-96">
        <h1> Our Products</h1>
        <nav className="w-10/12 ">
          <ul className="flex justify-between bg-blue-200 p-4">
            <Link to="laptop">
              <li className="px-4 py-2 rounded bg-yellow-400 ">Laptop</li>
            </Link>
            <Link to="mobile">
              <li className="px-4 py-2 rounded bg-yellow-400 ">Mobile</li>
            </Link>
            <Link to="watch">
              <li className="px-4 py-2 rounded bg-yellow-400 ">Smart Watch</li>
            </Link>
            <Link to="cloth">
              <li className="px-4 py-2 rounded bg-yellow-400 ">Cloths</li>
            </Link>
          </ul>
        </nav>
        <div className="w-10/12 m-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Products;

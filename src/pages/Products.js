import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4 bg-emerald-500">
        <h1>This is Product Page</h1>
        <ul className="flex justify-evenly bg-black text-white items-center p-3 w-full">
          <Link to="laptop">
            <li className="px-4 py-2 rounded border">Laptop</li>
          </Link>
          <Link to="mobile">
            <li className="px-4 py-2 rounded border">Mobile</li>
          </Link>
          {/* Path Ek Hi hai == /product/cloth  */}
          {/* <Link to="/product/cloth"> */}
          {/* <Link to="/cloth"> */}

          <Link to="cloth">
            <li className="px-4 py-2 rounded border">Cloth</li>
          </Link>
        </ul>
        <div className="h-96 p-4 rounded flex justify-center items-center bg-blue-400 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Products;

// Absolute Path  == Full Path  path="/product/cloth" Start From /
// Relative Path == Wihout /

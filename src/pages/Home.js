import React from "react";
import NabBar from "../components/NabBar";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const success = () => {
    navigate("/summary");
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-start p-4">
        <h1>This is Home Page</h1>

        <button
          onClick={() => success()}
          className="px-4 py-2 rounded bg-gray-500 text-white"
        >
          Submit
        </button>

        <Link to="products">
          <button className="px-4 py-2 rounded bg-pink-500 text-white">
            Products
          </button>
        </Link>

        <Link to="/products/cloth">
          <button className="px-4 py-2 rounded bg-yellow-500 text-white">
            Laptop
          </button>
        </Link>

        <Link to="users">
          <button className="px-4 py-2 rounded bg-purple-500 text-white">
            Users
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;

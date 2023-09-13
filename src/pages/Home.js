import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("Hello World");
    setTimeout(() => {
      navigate("/success");
    }, 3000);
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-start p-5">
        This is Home Page
        <button onClick={onSubmit} className="px-4 py-2 rounded bg-blue-500">
          Submit
        </button>
        <Link to="/product/cloth">
          <button className="px-4 py-2 rounded bg-blue-500">Cloth</button>
        </Link>
        <Link to="student">
          <button className="px-4 py-2 rounded bg-blue-500">Student</button>
        </Link>
      </div>
    </>
  );
};

export default Home;

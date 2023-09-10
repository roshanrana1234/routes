import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { userID } = useParams();

  //   const params = useParams();
  //   const { userID } = params;
  //   console.log("PARAM", params);

  return (
    <>
      <div>
        This is Detail Page
        <h1>User's ID is {userID} </h1>
      </div>
    </>
  );
};

export default DetailPage;

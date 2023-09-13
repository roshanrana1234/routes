import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  //   const { studentId } = useParams();
  const params = useParams();
  console.log("params", params);
  const { studentId } = params;
  return (
    <>
      {/* <div>This is Detail of student whose roll number is - {studentId} </div> */}
      <div>
        This is Detail of student whose roll number is - {params.studentId}
      </div>
    </>
  );
};

export default Detail;

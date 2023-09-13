import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setcount] = useState(initialCount);
  const increamentFive = () => {
    for (let i = 0; i < 5; i++) {
      // setcount(count + 1);
      //   The set count method is reading the value of the count state variable.
      setcount((perCount) => perCount + 1);
      //   Second Form of the setCount Funtion
      //   Basically insted of passing in a value of the new state variable , we pass in a funtion that has access to the old state value
    }
  };
  return (
    <>
      <div className="flex flex-col items-center ">
        <div>
          <span className="font-bold text-xl"> count </span>: {count}
        </div>
        <div className="flex gap-6 ">
          <button
            className="border p-4 bg-gray-600 text-white text-2xl"
            onClick={() => setcount((perCount) => perCount + 1)}
          >
            +
          </button>
          <button
            className="border p-4 bg-gray-600 text-white text-2xl"
            onClick={() => setcount(initialCount)}
          >
            Reset
          </button>
          <button
            className="border p-4 bg-gray-600 text-white text-2xl"
            onClick={() => setcount((perCount) => perCount - 1)}
          >
            -
          </button>
          <button
            className="border p-4 bg-gray-600 text-white text-2xl"
            onClick={increamentFive}
          >
            Increament 5
          </button>
        </div>
      </div>
    </>
  );
};

export default HookCounterTwo;

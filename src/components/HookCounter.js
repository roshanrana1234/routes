import React, { useState } from "react";

const HookCounter = () => {
  // This Hook or function accepts an argument which is the inital value of the state property and return the current value of the state property and method that is capable of updating that state property .
  const [count, setCount] = useState(0);
  //   This syntax is call array distructuring Which is a feature in ES6.
  //   Count == current value of this state variable
  //   setCount == Method that can update the state variable.

  //   re-render
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  );
};

export default HookCounter;

// A hook is just a special funtion that allow you to hook in to react features , so useState is a hook that allow you to add state to funtional component.

// Rules of Hooks:-
// Only Call Hooks at the Top Level
//  Don't call Hooks inside loops, conditions, or nested funtions.
// Only Call Hooks From React Funtions.
// Call them from the React Funtional compoents and not just any regular JavaScript Funtion.

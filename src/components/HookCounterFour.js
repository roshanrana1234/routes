import React, { useState } from "react";

const HookCounterFour = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <>
      <div>
        <button onClick={addItem}>Add a Number</button>
        <ul>
          {items.map((item) => {
            return (
              <li className="flex gap-5 " key={item.id}>
                {item.id} - {item.value}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HookCounterFour;

import React, { useState } from "react";

const HooksCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <div>
        <form action="">
          <input
            type="text"
            value={name.firstName}
            // Copy every propery in the name object and then just over write the firstName field with a different value.
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
          <h2>Your First name is - {name.firstName}</h2>
          <h2>Your Last name is - {name.lastName}</h2>
        </form>
        <h2>{JSON.stringify(name)}</h2>

        {/* useState does not automatically merge and update the object */}
      </div>
    </>
  );
};

export default HooksCounterThree;

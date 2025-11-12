import React, { useState } from "react";

const NeedState = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log("Count:", count);
  };
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default NeedState;

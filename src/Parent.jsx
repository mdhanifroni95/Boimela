import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex flex-col justify-center items-center m-3">
      <h1>Count in parent:{count}</h1>
      <button
        className="bg-teal-700 text-white p-1 rounded"
        onClick={incrementCount}
      >
        Increment Count
      </button>
      <Child count={count} onCountIncrement={incrementCount} />
    </div>
  );
};

export default Parent;

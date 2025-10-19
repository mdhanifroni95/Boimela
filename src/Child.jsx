import React from "react";

const Child = ({ count, onCountIncrement }) => {
  return (
    <div>
      <h2>Count in child:{count}</h2>
      <button
        className="bg-teal-500 text-white p-1 rounded"
        onClick={onCountIncrement}
      >
        Change Count child
      </button>
    </div>
  );
};

export default Child;

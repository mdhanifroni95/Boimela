import React from "react";

const BookDetails = ({ title, author }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{author}</p>
    </div>
  );
};

export default BookDetails;

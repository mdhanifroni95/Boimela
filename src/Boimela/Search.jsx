import React from "react";

const Search = ({ searchTerm, onSearchBook }) => {
  return (
    <form action="">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchBook(e.target.value)}
        name=""
        id=""
        placeholder="Search Books..."
        className="mb-4 border rounded-md p-1 w-full"
      />
    </form>
  );
};

export default Search;

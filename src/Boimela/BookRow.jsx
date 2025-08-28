import React from "react";
import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";

const BookRow = ({ book }) => {
  return (
    <>
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook />
    </>
  );
};

BookRow.protoTypes;

export default BookRow;

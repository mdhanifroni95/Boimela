import { Star } from "lucide-react";

const FeatureBook = ({ book, onFeatureBook }) => {
  console.log("Feature book", book.id);
  // console.log("onFeatureBooks", onFeatureBook);
  return (
    <button
      onClick={() => onFeatureBook(book.id)}
      className="cursor-pointer hover:scale-110 transition-transform"
    >
      <Star color={book.isFeature ? "green" : "black"} />
    </button>
  );
};

export default FeatureBook;

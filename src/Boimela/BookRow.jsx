import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";

const BookRow = ({ book, onFeatureBook }) => {
  return (
    <div className="flex rounded-lg justify-between space-y-4 shadow p-4">
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook book={book} onFeatureBook={onFeatureBook} />
    </div>
  );
};

export default BookRow;

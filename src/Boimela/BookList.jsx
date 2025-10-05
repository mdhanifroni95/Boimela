import BookRow from "./BookRow";
const BookList = ({ searchTerm = "", books = [], onFeatureBooks }) => {
  const rows = [];
  books.forEach((obj) => {
    // console.log("title", obj.title);
    if (obj.title?.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }

    rows.push(
      <BookRow key={obj.id} book={obj} onFeatureBooks={onFeatureBooks} />
    );
  });

  return <div className="space-y-4">{rows}</div>;
};

export default BookList;

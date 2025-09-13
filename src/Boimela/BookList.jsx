import BookRow from "./BookRow";
const BookList = ({ searchTerm, book }) => {
  // console.log("searchTerm", searchTerm);
  const rows = [];
  book.forEach((obj) => {
    if (obj.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(<BookRow key={obj.id} book={obj} />);
  });
  return <div className="space-y-4">{rows}</div>;
};

export default BookList;

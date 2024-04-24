import PropTypes from "prop-types";
import BookCard from "./BookCard";
import './Dashboard.css';

const Dashboard = ({ books, onEdit, onDelete }) => {
  return (
    <div className="dashboard">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

Dashboard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Dashboard;

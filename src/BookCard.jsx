import { useState } from "react";
import PropTypes from "prop-types";
import './Dashboard.css'

const BookCard = ({ book, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState(book);

  const handleSave = () => {
    onEdit(editedBook);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  return (
    <div className="book-card">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="about"
            value={editedBook.about}
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            value={editedBook.author}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="title">
          <div>Title: {book.title}</div>
          <div className="title">About: {book.about}</div>
          <div className="title">Author: {book.author}</div>
          <button onClick={() => setIsEditing(true)} style={{backgroundColor:'blue'}}>Edit</button>
          <button onClick={handleDelete} style={{backgroundColor:'#da1a58'}}>Delete</button>
        </div>
      )}
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default BookCard;

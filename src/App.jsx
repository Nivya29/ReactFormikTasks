import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import CreateBook from "./CreateBook";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Waiting for the Barbarians", about: "Book written by J.M Coetzee", author: "J.M Coetzee" },
    { id: 2, title: "The Book Thief", about: "Book written by Markus Zusak", author: "Markus Zusak" },
    { id: 3, title: "The Adventures of Huckleberry Finn", about: "Book written by Mark Twain", author: "Mark Twain" }
  ]);

  const handleEdit = (editedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === editedBook.id ? editedBook : book
    );
    setBooks(updatedBooks);
  };

  const handleDelete = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              books={books}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          }
        />
        <Route
          path="/create"
          element={<CreateBook addBook={addBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;

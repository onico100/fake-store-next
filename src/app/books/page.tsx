"use client";

import { useEffect, useState } from "react";
import { bookService } from "../../services/bookService";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
};

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    price: 0,
    imageUrl: "",
  });
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  useEffect(() => {
    bookService.getAll().then((response) => setBooks(response.data));
  }, []);

  const handleCreate = async () => {
    const response = await bookService.create(newBook);
    setBooks([...books, response.data]);
    setNewBook({ title: "", author: "", price: 0, imageUrl: "" });
  };

  const handleUpdate = async () => {
    if (editingBook) {
      const response = await bookService.update(editingBook);
      setBooks(
        books.map((book) =>
          book.id === response.data.id ? response.data : book
        )
      );
      setEditingBook(null);
    }
  };

  const handleDelete = async (id: number) => {
    await bookService.delete(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="container">
      <h1>Books</h1>

      {/* Book Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={editingBook ? editingBook.title : newBook.title}
          onChange={(e) =>
            editingBook
              ? setEditingBook({ ...editingBook, title: e.target.value })
              : setNewBook({ ...newBook, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Author"
          value={editingBook ? editingBook.author : newBook.author}
          onChange={(e) =>
            editingBook
              ? setEditingBook({ ...editingBook, author: e.target.value })
              : setNewBook({ ...newBook, author: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={editingBook ? editingBook.price : newBook.price}
          onChange={(e) =>
            editingBook
              ? setEditingBook({
                  ...editingBook,
                  price: parseFloat(e.target.value),
                })
              : setNewBook({ ...newBook, price: parseFloat(e.target.value) })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={editingBook ? editingBook.imageUrl : newBook.imageUrl}
          onChange={(e) =>
            editingBook
              ? setEditingBook({ ...editingBook, imageUrl: e.target.value })
              : setNewBook({ ...newBook, imageUrl: e.target.value })
          }
        />
        <button onClick={editingBook ? handleUpdate : handleCreate}>
          {editingBook ? "Update Book" : "Add Book"}
        </button>
        {editingBook && (
          <button onClick={() => setEditingBook(null)}>Cancel</button>
        )}
      </div>

      {/* Book List */}
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="card">
            <img
              src={book.imageUrl || "https://via.placeholder.com/150"}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>$ {book.price.toFixed(2)}</p>
            <button onClick={() => setEditingBook(book)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

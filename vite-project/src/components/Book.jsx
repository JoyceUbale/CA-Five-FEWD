import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Book.css';
import { Link } from "react-router-dom";

function Book() {
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' }
        });

        setBooks(result.data.books);
      } catch (error) {
        console.log("Status Code : ", error.response.status);
        console.log("Website not found");
      }
    };

    fetchUserData();
  }, []);

  const handleSearch = (e) => {
    setSearchBook(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchBook.toLowerCase())
  );

  return (
    <>
      <div className="navbar">
        <h1>Kalvium Books</h1>
        <input
          type="text"
          placeholder="Search for books..."
          value={searchBook}
          onChange={handleSearch}
        />
        <Link to="/forms">
        <button>REGISTER</button>
        </Link>
      </div>
      <div className="container">
        {filteredBooks.map((book, index) => (
          <div key={index} className="item">
            <h2 className="title">{book.title}</h2>
            <div className="details">
              <img src={book.imageLinks.smallThumbnail} alt={book.title} className="book-img" />
            </div>
            <p className="book-author">{book.authors[0]}</p>
            <p className="book-rating">Rating: {book.averageRating}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Book;

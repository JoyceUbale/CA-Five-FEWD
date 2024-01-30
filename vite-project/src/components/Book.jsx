import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Book.css';
import { Link } from "react-router-dom";

function Book() {
  // State to store the list of books and the search input value
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState('');

  // useEffect hook to fetch the list of books when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch books from the API
        const result = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' }
        });

        // Update the books state with the fetched data
        setBooks(result.data.books);
      } catch (error) {
        // Handle errors, log status code and a generic message
        console.log("Status Code : ", error.response.status);
        console.log("Website not found");
      }
    };
  // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []);
// Event handler for updating the searchBook state based on user input
  const handleSearch = (e) => {
    setSearchBook(e.target.value);
  };

  // Filter the books based on the search input
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchBook.toLowerCase())
  );

  return (
    <>
      <div className="navbar">
        <h1>Kalvium Books</h1>
        <input className="search" type="text" placeholder="Search for books..." value={searchBook} onChange={handleSearch}/>
        <Link to="/forms">
        <button>REGISTER</button>
        </Link>
      </div>
      <div className="grid">
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

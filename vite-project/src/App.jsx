import React from "react";
import Book from "./components/Book";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </Router>
  );
}

export default App;

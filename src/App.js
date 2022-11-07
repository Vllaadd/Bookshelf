import React from "react";
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/bookshelf">Bookshelf</Link>
      </nav>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="bookshelf" element={<Bookshelf />}/>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </div>
  );
}

const Bookshelf = () => {
  const books = [
    {
      title: "The Famished Road",
      isComplited: false,
    },
    {
      title: "Cockroaches",
      isCompleted: true,
    },
  ];
  return(
    <>
    <h2>Bookshelf</h2>
    <ul>
      {books.map((book) => (
        <li key={book.title}>{book.title}</li>
      ))}
    </ul>
    </>
  );
};



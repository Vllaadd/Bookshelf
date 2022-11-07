import React from "react";
import {Routes, Route, Link} from "react-router-dom";

export default function App() {
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

const byTitle = (title) => (book) =>
  book.title.toLowerCase().includes((title || "").toLowerCase());

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
  const[title,setTitle]=React.useState("");
  const handleTitle=(event)=>{
    setTitle(event.target.value);
  };
  return(
    <>
    <h2>Bookshelf</h2>
    <input type="text" value={title} onChange={handleTitle} />
    <ul>
      {books.filter(byTitle(title)).map((book) => (
        <li key={book.title}>{book.title}</li>
      ))}
    </ul>
    </>
  );
};



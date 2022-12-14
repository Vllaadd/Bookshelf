import * as React from "react";
import {Routes, 
        Route,
        useNavigate } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Books from "./components/books";
import Book from "./components/book";
import NoMatch from "./components/noMatch";

const App = () => {
  const navigate = useNavigate();

  const [books, setBooks] = React.useState([
   {id: "1", title:"The Flamished Road"},
   {id: "2", title:"The Song of Enchantment"},
   {id: "3", title:"We are clowns"},
   {id: "4", title:"Cockroaches"},
  ]);
  const handleRemoveBook = (bookId) => {
    setBooks((state) => state.filter((book) => book.id !== bookId));
    navigate("/books");
  };
  return (
    <>
      <Navigation/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="books" element={<Books books={books}/>}>
          <Route path=":bookId" element={<Book onRemoveBook={handleRemoveBook}/>} />
        </Route>
        <Route path="*" element={<NoMatch />}/>
        <Route />
      </Routes>
      </>
  );
};

export default App;


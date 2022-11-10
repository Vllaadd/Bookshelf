import React from "react";
import {Routes, 
        Route, } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Books from "./components/books";
import Book from "./components/book"

const App = () => {
  const navigate = useNavigate();

  const [books, setBookd] = React.useState([
    {id:"1", fullName:"Book One"},
    {id:"2", fullName:"Book Two"},
    {id:"3", fullName:"Book Three"}
  ]);

  const handleRemoveBook = (bookId) =>{
    setBooks((state) => state.filter((book) => book.id !==book.Id));
  };
  navigate("/books");

  return (
    <>
      <h1>React Router</h1>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="books" element={<Books books={books}/>}>
          <Route path=":bookId" element={<Book onRemoveBook={handleRemoveBook} />} />
        </Route>
        <Route path="*" element={<NoMatch />}/>
        <Route />
      </Routes>
    </>
  );
};

const NoMatch = () => {
  return (
    <p>There's nothing here: 404!</p>
  )
}

export default App;


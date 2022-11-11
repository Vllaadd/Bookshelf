import * as React from "react";
import {Routes, 
        Route,
        useNavigate } from "react-router-dom";
import Navigation from "./components/navigation";
import Books from "./components/books";
import Book from "./components/book";

const App = () => {
  const navigate = useNavigate();

  const [books, setBooks] = React.useState([
   {id: "1", fullName:"The Flamished Road"},
   {id: "2", fullName:"The Song of Enchantment"},
   {id: "3", fullName:"We are clowns"},

  ]);
  const handleRemoveBook = (bookId) => {
    setBooks((state) => state.filter((book) => book.id !== bookId));
    navigate("/user");
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

const Home = () =>{
  return (
      <main>
          <h2>Home</h2>
      </main>
  )
}

export default App;


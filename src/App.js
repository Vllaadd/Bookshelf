import * as React from "react";
import {Routes, 
        Route,
        Link,
        Outlet,
        useParams,
      useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const [books, setBooks] = React.useState([
   "Book One", "Book Two", "Book Three"
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

const Navigation = () =>{
  return(
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/books">Books</Link>
    </nav>
  )
}

const NoMatch = () => {
  return (
    <p>There's nothing here: 404!</p>
  )
}

const Home = () =>{
  return (
      <main>
          <h2>Home</h2>
      </main>
  )
}

const Books =({books})=>{
  return(
      <>
          <h2>Books</h2>
          <ul>
              {books.map((book) =>(
                  <li key={book.id}>
                      <Link to={book.id}>{book.fullName}</Link>
                  </li>
              ))}
          </ul>
          <Outlet />
      </>
  )
}

const Book = ({onRemoveBook}) =>{
  const { bookId } = useParams();
  return(
      <>
      <h2>Book: {bookId}</h2>
      <button type="button" onClick={() => onRemoveBook(bookId)}>Remove</button>
      <Link to="/books">Back to Books</Link>
      </>
  );
};

export default App;


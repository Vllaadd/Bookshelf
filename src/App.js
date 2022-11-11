import * as React from "react";
import {Routes, 
        Route,
        Link,
        Outlet,
        useParams,
        useSearchParams,
      useNavigate } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";
  const handleSearch = (event) => {
    const name = event.target.value;
    if(name){
      setSearchParams({name: event.target.value});
    }else{
      setSearchParams({});
    }
  };
  return(
      <>
          <h2>Books</h2>
          <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          />
          <ul>
              {books
              .filter((book)=>
              book.fullName.toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
              )
              .map((book) =>(
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


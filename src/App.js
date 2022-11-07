import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Books from "./components/books";

const App = () => {
  const books=[
    {id:"1", fullName:"Book One"},
    {id:"2", fullName:"Book Two"},
    {id:"3", fullName:"Book Three"}
  ]
  return (
    <>
      <h1>React Router</h1>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="books" element={<Books books={books}/>}>
          <Route path=":bookId" element={<Book />} />
        </Route>
        <Route path="*" element={<NoMatch />}/>
        <Route />
      </Routes>
    </>
  );
};

const NoMatch = () => {
  return (
    <p>There's nothing here: 404!</p>;
  )
}

export default App;


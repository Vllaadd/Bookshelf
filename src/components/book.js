import React from "react";
import { useParams } from "react-router-dom";


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
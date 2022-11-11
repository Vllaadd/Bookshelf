import React from "react";
import {Outlet, 
        Link, 
        useSearchParams } from "react-router-dom";


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
                book.title.toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
                )
                .map((book) =>(
                    <li key={book.id}>
                        <Link to={book.id}>{book.title}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    )
  }

  export default Books;
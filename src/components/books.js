import {Link, 
        Outlet} from "react-router-dom";

const Books =(books)=>{
    return(
        <main>
            <h2>Books</h2>
            <ul>
                {books.map((book) =>(
                    <li key={book.id}>
                        <Link to={book.id}>{book.fullName}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </main>
    )
}

export default Books;
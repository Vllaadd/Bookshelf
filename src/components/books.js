const Books =(books)=>{
    return(
        <main>
            <h2>Books</h2>
            <ul>
                {books.map((book) =>(
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.fullName</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Books;
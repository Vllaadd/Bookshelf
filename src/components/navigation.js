import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <h1>This is navigation Page.</h1>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/books">Books</Link>
        </nav>
    );
};

export default Navigation;
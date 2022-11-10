import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/books">Books</Link>
        </nav>
    );
};

export default Navigation;
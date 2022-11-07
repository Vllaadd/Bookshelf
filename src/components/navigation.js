import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link tp="/users">Users</Link>
        </nav>
    );
};
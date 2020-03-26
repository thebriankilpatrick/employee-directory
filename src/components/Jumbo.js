import React from "react";
import Search from "./Search";

function Jumbo() {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Search through the table of employees below</p>
                <Search ></Search>
            </div>
        </div>
    )
}

export default Jumbo;
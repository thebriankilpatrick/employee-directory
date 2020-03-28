import React from "react";

function Search(props) {

    return (
        <div className="container text-center">
            <form className="searchForm">
                <div>
                    <label className="sr-only" for="inputName">Name</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">Search</div>
                        </div>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" onChange={props.handleInputChange}/>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Search;
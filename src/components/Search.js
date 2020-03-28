import React from "react";

// function handleInputChange(event) {
//     this.setState({
//         results: filterEmployee(event.target.value, maxResults)
//     });
// }

// const filterEmployee = (searchText) => {
//     return this.state.results.filter((employee) => {
//       if (employee.data.name.toLowerCase().includes(searchText.toLowerCase())) {
//         return true;
//       }
//       return false;
//     }).slice(0);
//   }
  
// const maxResults = 50;


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
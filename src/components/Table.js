import React, { Component } from "react";
import API from "../utils/API";

// Declare response from the random user API call as a variable here.
// Then use {} to get information from that variable into your function

class Users extends Component {
    state = {
        results: []
    }

    // This should, hopefully, set the results array in the Users class to the res you get back from the API call
    componentDidMount() {
        API.getUsers().then(res => {
            this.setState({ results: res })
        }).catch(err => {
            console.log(err);
        });
    };
}

function Table() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
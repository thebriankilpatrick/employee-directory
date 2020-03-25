import React, { Component } from "react";
import API from "../utils/API";

// Declare response from the random user API call as a variable here.
// Then use {} to get information from that variable into your function

class Users extends Component {
    state = {
        results: []
    };

    // This should, hopefully, set the results array in the Users class to the res you get back from the API call
    componentDidMount() {
        API.getUsers().then(res => {
            this.setState({ results: res.data.results })
        }).catch(err => {
            console.log(err);
        });
    };

    

    render() {
        // console log returns an empty array
        console.log(this.state.results);
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
                        {this.state.results.map(({name, email, cell, dob}) => {
                            return (
                                <tr>
                                    <td>{name.first + " " + name.last}</td>
                                    <td>{email}</td>
                                    <td>{cell}</td>
                                    <td>{dob.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


// function Table() {
//     return (
//         <div className="container">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">Name</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">Phone</th>
//                         <th scope="col">Birthday</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
                    
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }

export default Users;
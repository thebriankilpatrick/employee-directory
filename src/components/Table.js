import React, { Component } from "react";
import API from "../utils/API";
import Moment from "react-moment";

// Add search bar, with functionality (search by name, and search by ???)
// use Moment to format the DOB

class Users extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        API.getUsers().then(res => {
            this.setState({ results: res.data.results })
        }).catch(err => {
            console.log(err);
        });
    };

    

    render() {
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
                                    <td><Moment format="MM/DD/YYYY">{dob.date}</Moment></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users;
import React, { Component } from "react";
import API from "../utils/API";
import Moment from "react-moment";
import Search from "./Search";  

class Users extends Component {
    state = {
        results: [],
        filteredResults: []
    };

    searchEmployee = (searchText) => {
        const results = this.state.results;
        const filteredResults = results.filter((employee) => {
            const fullName = employee.name.first + employee.name.last;
            return fullName.toLowerCase().includes(searchText.toLowerCase());
        })
        return filteredResults;
    }

    componentDidMount() {
        API.getUsers().then(res => {
            this.setState({ results: res.data.results, filteredResults: res.data.results })
        }).catch(err => {
            console.log(err);
        });
    };

    handleInputChange = (event) => {
        const res = this.searchEmployee(event.target.value);
        this.setState({
            filteredResults: res
        })
    };

    handleSort = () => {
        this.setState(this.state.results.sort((a, b) => a.name.first.localeCompare(b.name.first)));
    }

    render() {
        return (
            <div className="container">
                <Search 
                    handleInputChange={this.handleInputChange}>
                </Search>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name <i className="fas fa-sort-down" id="sortBtn" onClick={this.handleSort}></i></th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Birthday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredResults.map(({name, email, cell, dob}) => {
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
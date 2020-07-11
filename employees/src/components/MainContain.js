import React from "react";

import GetEmployees from "../utils/API"

import Jumbotron from "./Jumbotron"
import Table from "./Table"
import UserRow from "./UserRow";
import SortByName from "../utils/Sorter"




class MainContain extends React.Component {
    state = { 
        isAscending: true,
        Employees: [],
        searchArray: [],
    }
    
    // Use the randomuser.me API call to generate employees and add them to an array in state object, catch at end to see if theres an error
    CreateEmployees = () => {
        GetEmployees().then(results => {
            this.setState({Employees: results.data.results})
            console.log("Employees Succesful generation")
            console.log(this.state.Employees)
        }).catch((error) => console.log(error))
    }


    
    // Run on page first load "component first Print => do this"
    componentDidMount() {
        this.CreateEmployees()
    } 

    AscDescName = () => {
        this.setState(SortByName(this.state.Employees, this.state.isAscending))
    }
    

    render() {
    return (
    <div className="MainContain">
        <Jumbotron />
        <div className="container">
            <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2">
            <span className="mr-2" onClick={this.AscDescName}>^</span><span className="ml-2" onClick={this.AscDescName}>v</span>
            </div>
            </div>
            <Table  />
            {this.state.Employees.map(({ picture, name, phone, nat, id, dob}) => (
                <UserRow pic={picture.thumbnail} fname={name.first} lname={name.last} phnum={phone} nat={nat} age={dob.age} key={id.value} />
            ))}
        </div>
    </div>
    )}
}

export default MainContain
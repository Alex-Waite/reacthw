import React from "react";

class UserRow extends React.Component {
    render() {
        return (
            <div className="row mb-2">
                <div className="col-md-2"><img alt="User face" src={this.props.pic}></img></div>
                <div className="col-md-2"><h5>{this.props.fname}</h5></div>
                <div className="col-md-2"><h5>{this.props.lname}</h5></div>
                <div className="col-md-2"><p>{this.props.nat}</p></div>
                <div className="col-md-2"><h5>{this.props.phnum}</h5></div>
                <div className="col-md-2"><h5>{this.props.age}</h5></div>
            </div>
        )
    }
}

export default UserRow;


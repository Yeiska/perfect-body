import React, { Component } from "react";
//import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import API from "../../utils/API";

class Login extends Component {

  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, function () {
      console.log(this.state);
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.signUp({
      username: this.state.username,
      password: this.state.password
    })
    .catch(err => console.log(err));

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.username}`);
    
  };


  render() {
    return (
      <div className="grid-container">
        <div className="grid-x loginGrid">
          <div className="cell small-offset-3 loginCell">
            <LoginForm 
            onChange={this.handleInputChange}
            onSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
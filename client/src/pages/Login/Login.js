import React, { Component } from "react";
//import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
//import API from "../../utils/API";

class Login extends Component {

  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div className="grid-container">
        <div className="grid-x loginGrid">
          <div className="cell small-offset-3 loginCell">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
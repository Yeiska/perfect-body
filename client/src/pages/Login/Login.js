import React, { Component } from "react";
//import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import API from "../../utils/API";

class Login extends Component {

  state = {
    username: "",
    password: ""
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
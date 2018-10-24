import React, { Component } from "react";
import { Redirect } from "react-router";
import LoginForm from "../../components/LoginForm";
import API from "../../utils/API";

class Login extends Component {

  state = {
    username: "",
    password: "",
    loggedIn: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, function () {
      //console.log(this.state);
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.signUp({
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res);
      this.setState({ loggedIn: true })
    })
    .catch(err => console.log(err));
    
  };


  render() {
    return (
      <div className="grid-container">
        <div className="grid-x loginGrid">
          <div className="cell small-offset-3 loginCell">
          {!this.state.loggedIn ? 
            <LoginForm 
            onChange={this.handleInputChange}
            onSubmit={this.handleFormSubmit}
            />
            :
            <Redirect to="/Home" />
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
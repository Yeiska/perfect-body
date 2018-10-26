import React, { Component } from "react";
import { Redirect } from "react-router";
import LoginForm from "../../components/LoginForm";
import { HeaderLogin } from "../../components/Header";
import API from "../../utils/API";

class Login extends Component {

  state = {
    username: "",
    password: "",
    loggedIn: false,
    invalid: false,
    incorrect: false,
    signUp: false
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
      if (res.data.status === 200) {
      this.setState({ loggedIn: true })
      }else if (res.data.status === 404) {
        this.setState({ signUp: true })
      }
    })
    .catch(err => console.log(err));
    
  };

  handleLogin = event => {
    event.preventDefault();
    API.logIn({
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res);
      if (res.data.status === 200) {
        this.setState({ loggedIn: true })
      }else if (res.data.status === 404) {
        console.log("Invalid username.. Try signing up first");
        this.setState({ invalid: true })
      }else if (res.data.status === 401) {
        console.log("Incorrect Password.. try again!");
        this.setState({ incorrect: true })
      }
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="img-container">
      <HeaderLogin />
      <div className="grid-container">
        <div className="grid-x loginGrid">
          <div className="cell small-offset-3 loginCell">
          {!this.state.loggedIn ? 
            <LoginForm 
            onChange={this.handleInputChange}
            onSubmit={this.handleFormSubmit}
            onLogin={this.handleLogin}
            />
            :
            <Redirect to="/Home" />
          }
          {this.state.signUp ?
          <h3>This user already exists. Try logging in or creating a new user!</h3>
          :
          <p></p>
          }
           {this.state.incorrect ?
            <h3>The password you entered is incorrect. Try Again!</h3>
            :
            <p></p>
          }
          {this.state.invalid ?
            <h3>The username you entered is invalid. Try signing up!</h3>
            :
            <p></p>
          }
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
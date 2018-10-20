import React, { Component } from "react";
import "./Login.css";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Trunk";

import API from "../../utils/API";

class Login extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <h1 className="login-center">
            Login
          </h1>
        </Row>
        <Row>
          <button className="btn btn-outline-primary login-center" id="google-button" onClick={API.login}>
            Google
          </button>
        </Row>
      </Container>
    );
  }
}

export default Login;
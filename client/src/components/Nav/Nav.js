import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

const Navbar = props => 
    <div className="top-bar">
        <div className="top-bar-left">
            <li className="menu-text">Perfect Body</li>
        </div>
        <div className="top-bar-right">
            <li><a href="#0">Workouts</a></li>
            <li><a href="#0">Nutrition</a></li>
            <li><a href="#0">User</a></li>
            <li><a href="/auth/login">Sign in | Sign up</a></li>
            <Link to={"/auth/login"}><button className="btn btn-outline-light mr-2 my-sm-0">Sign In</button></Link>
            <button className="btn btn-outline-light mr-2 my-sm-0" onClick={API.logout}>Log Out</button>
      <button className="btn btn-outline-light mr-2 my-sm-0" type="submit">Register</button>
        </div>
    </div>

export default Navbar;

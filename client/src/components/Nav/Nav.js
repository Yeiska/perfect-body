import React from "react";

const Navbar = props => 
    <div className="row">
        <div className="top-bar">
              <div className="small-4 columns">
                <div className="top-bar-left">
                    <ul>
                        <li>
                            <a href="#0">Workouts</a>
                        </li>
                        <li>
                            <a href="#0">Nutrition</a>
                        </li>
                        <li>
                            <a href="#0">Profile</a>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="small-4 columns">
                <div className="top-bar-center">
                    <ul>
                        <li className="name">
                            <h1 className="title">Perfect Body</h1>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="small-4 columns">
                <div className="top-bar-right">
                    <ul>
                        <li>
                            <a href="#0">Sign in | Sign up</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>

export default Navbar;

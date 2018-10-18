import React from "react";

const Navbar = props => 
    <div className="top-bar">
    <div className="grid-x navGrid">
    
              <div className="small-4 cell">
                <div className="top-bar-left">
                
                    <ul>
                    <div className="grid-x">
                        <li className="large-4 cell">
                            <a href="#0">Workouts</a>
                        </li>
                        <li className="large-4 cell">
                            <a href="#0">Nutrition</a>
                        </li>
                        <li className="large-4 cell">
                            <a href="#0">Profile</a>
                        </li>
                        </div>
                    </ul>
                
                </div>
                </div>
                <div className="small-4 cell">
                <div className="top-bar-center">
                    <ul>
                        <li className="name">
                            <h1 className="title">Perfect Body</h1>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="small-4 cell">
                <div className="top-bar-right">
                    <ul>
                        <li className="signIn">
                            <a href="#0"className="button" data-open="signInReveal">Sign in </a>
                                <div className="reveal" id="signInReveal" data-reveal>
                                    <h2>Sign Me In Baby!!</h2>
                                </div>
                            |<a href="#0"> Sign up</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        

export default Navbar;

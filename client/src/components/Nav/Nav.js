import React from "react";
import { Link } from "react-router-dom";

const Navbar = props =>
    <div className="top-bar">
        <div className="grid-x navGrid" data-equalizer>

            <div className="small-4 cell">
                <div className="top-bar-left" data-equalizer-watch>

                    <ul>
                        <div className="grid-x main-menu">
                            <li className="large-4 cell">
                                <Link to={"/"}>
                                    <a href="#0">Workouts</a>
                                </Link>
                            </li>
                            <li className="large-4 cell">
                                <Link to={"/Nutrition"}>
                                    <a href="#0">Nutrition</a>
                                </Link>
                            </li>
                            <li className="large-4 cell">
                                <a href="#0">Profile</a>
                            </li>
                        </div>
                    </ul>

                </div>
            </div>
            <div className="small-4 cell">
                <div className="top-bar-center" data-equalizer-watch>
                    <ul>
                        <li className="name">
                            <Link to={"/"}>
                                <h1 className="title">Perfect Body</h1>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="small-4 cell">
                <div className="top-bar-right" data-equalizer-watch>
                    <ul>
                        <li className="logOut">
                            <button className="button success">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


export default Navbar;

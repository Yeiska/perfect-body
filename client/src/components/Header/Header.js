import React from "react";

const Header = props => 
    <div className="grid-x header">
        <div className="large-12 cell">
            <header className="header">
                {props.children}
            </header>
        </div>
    </div>

export default Header;
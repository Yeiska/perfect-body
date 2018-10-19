import React from "react";

export const HeaderNutrition = props => 
    <div className="grid-x header">
        <div className="large-12 cell">
            <header className="header Nutrition">
                {props.children}
            </header>
        </div>
    </div>

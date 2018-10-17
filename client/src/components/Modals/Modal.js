import React from "react";

export const Modals = props =>

    <div className="grid-x workouts" id={props.workout} aria-labelledby={props.workout} role="dialog">
        <div className="cell small-12 large-6">
            <h2>{props.workout}</h2>
            <ul>
                {props.children}
            </ul>
        </div>
    </div>

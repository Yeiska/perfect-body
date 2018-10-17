import React from "react";

export const ModalListItem = props => (
    <div className="grid-x">
        <div className="cell small-12">
    <li className="list-group-item">
       <h4>{props.routine}: {props.sets} x {props.reps}</h4>
    </li>
    </div>
    <div className="grid-x">
        <div className="cell small-12">
            <form>
                <div className="grid-x">
                <div className="cell small-4 cell large-4">
                    <label className="sets">
                        <strong>Actual Sets:</strong>
                    <input className="input" type="text" />
                    </label>
                </div>
                <div className="cell small-4 cell large-4">
                    <label className="reps">
                    <strong>Actual Reps:</strong>
                    <input className="input" type="text" />
                    </label>
                </div>
                <div className="cell small-4 cell large-4">
                    <label>
                    <strong>Weight Used (If Necessary):</strong>
                    <input className="input" type="text" />
                    </label>
                </div>
                </div>
            </form>
            </div>
            </div>
        </div>
);


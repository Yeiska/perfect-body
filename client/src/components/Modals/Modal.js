import React from "react";

const Modals = props =>
    <div className="row">
        <div className="small-6 columns">
            <a href="#0" data-reveal-id={props.workout} className="radius button">{props.workout}</a>
            <div id="firstModal" className="reveal-modal" data-reveal aria-labelledby="Title"{...props.workout} aria-hidden="true" role="dialog">
                <h2 id="Title"{...props.workout}>{props.workout}</h2>
                <ul>
                    <div className="row">
                        <div className="small-12 columns">
                            <li>{props.routine}: Sets: {props.sets} Reps: {props.reps}
                                <form>
                                    <div className="row">
                                        <div className="small-6 columns">
                                            <label>Actual Sets:
                                                <input type="text" />
                                            </label>
                                        </div>
                                        <div className="small-6 columns">
                                            <label>Actual Reps:
                                                <input type="text" />
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </div>
                    </div>
                </ul>
                <a href="#0" className="close-reveal-modal" aria-label="Close">&#215;</a>
            </div>

        </div>
        {/* <div className="small-6 columns">
        <div id={props.workout} className="reveal-modal" data-reveal aria-labelledby="Title"{...props.workout} aria-hidden="true" role="dialog">
                <h2 id="Title"{...props.workout}>{props.workout}</h2>
                <ul>
                    <div className="row">
                        <div className="small-12 columns">
                            <li>{props.routine}: Sets: {props.sets} Reps: {props.reps}
                                <form>
                                    <div className="row">
                                        <div className="small-6 columns">
                                            <label>Actual Sets:
                                    <input type="text" />
                                            </label>
                                        </div>
                                        <div className="small-6 columns">
                                            <label>Actual Reps:
                                    <input type="text" />
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </div>
                    </div>
                </ul>
                <a href className="close-reveal-modal" aria-label="Close">&#215;</a>
            </div>
        </div> */}
    </div>

export default Modals;
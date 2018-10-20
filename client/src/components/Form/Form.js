import React from "react";

const Form = props =>
    <div className="small-12 medium-6 cell">
        <label>
            {props.label}
            <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} value={props.value} />
        </label>
        <p className="help-text" id={props.id}>{props.help}</p>
    </div>


export default Form;
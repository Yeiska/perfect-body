import React from "react";

const MacroDisplay = props =>
    <div>
        Your daily Macro intake should be:
        protein: {props.protein}g's
        fat: {props.fat}g's
        carbs: {props.carbs}g's
    </div>

    export default MacroDisplay;
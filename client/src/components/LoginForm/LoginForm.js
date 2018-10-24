import React from "react";
// import { Link } from "react-router-dom";

const LoginForm = props =>
    <fieldset className="fieldset">
        <legend>Sign In or Sign Up</legend>
        <h1 className="loginTitle">Perfect Body</h1>
        <form>
            <div className="grid-container">
                <div className="grid-x">
                    <label className="cell">
                        Username:
                        <input type="text" placeholder="PerfectBody@PerfectBody.com" name="username" onChange={props.onChange} />
                    </label>
                    <p className="help-text">Enter your email as your Username to sign in</p>
                    <label className="cell">
                        Password:
                        <input type="password" placeholder="PerfectBody24@" name="password" onChange={props.onChange} />
                    </label>
                    <p className="help-text">Enter your Password here. (Must be at least 8 charecters)</p>
                    <div className="cell large-offset-3">
                    
                        <button className="button success signUp" onClick={props.onSubmit}>Sign Up</button>
                   
                        <button className="button success logIn" onClick={props.onLogin}>Log In</button>
                    
                    </div>
                </div>
            </div>
        </form>

    </fieldset>

export default LoginForm;
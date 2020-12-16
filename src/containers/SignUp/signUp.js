import React from 'react';
import "./SignUp.css";

export default function signIn () {

        return (
            <div>
                <div className="sign-up"> 
                    <h1>Registration</h1> 
                    <input
                    type="text"
                    className="search-bar"
                    placeholder="Username"/>
                    <input
                    type="text"
                    className="search-bar"
                    placeholder="Email"/>
                    <input
                    type="text"
                    className="search-bar"
                    placeholder="Password"/>
                     <input
                    type="text"
                    className="search-bar"
                    placeholder=" Confirm Password"/>
                    <button className="btn-create">Create Account</button>
                </div>
            </div>
            
        )
    }

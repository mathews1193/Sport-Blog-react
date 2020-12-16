import React from 'react';
import "./SignIn.css";

export default function signIn() {

        return (
            <div>
                <div className="sign-in"> 
                    <h1>Sign In</h1> 
                    <input
                    type="text"
                    className="search-bar"
                    placeholder="Email"/>
                    <input
                    type="text"
                    className="search-bar"
                    placeholder="Password"/>
                     <button className="btn-login">Login</button>
                </div>
            </div>
            
        )
    }

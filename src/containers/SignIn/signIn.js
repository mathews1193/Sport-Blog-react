import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import "./SignIn.css";

export class signIn extends Component {
    render() {
        return (
            <div>
                <NavBar/>
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
}

export default signIn
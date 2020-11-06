import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import "./SignUp.css";

export class signIn extends Component {
    render() {
        return (
            <div>
                <NavBar/>
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
}

export default signIn

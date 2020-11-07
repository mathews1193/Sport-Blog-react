import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import "./Profile.css";

export class profile extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="profile"> 
                    <h1>Profile</h1> 
                    <div className="profile-pic">

                    </div>
                    <p>Name:</p>
                    <p>Username:</p>
                    <p>Email:</p>
                    <p>Favorite Basketball Team:</p>
                </div>
            </div>
            
        )
    }
}

export default profile

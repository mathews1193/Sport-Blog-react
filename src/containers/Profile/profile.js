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
                </div>
            </div>
            
        )
    }
}

export default profile

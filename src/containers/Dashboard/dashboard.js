import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import "./dashboard.css";

export class dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="dashboard"> 
                    <h1>Dashboard</h1> 
                </div>
            </div>
            
        )
    }
}

export default dashboard

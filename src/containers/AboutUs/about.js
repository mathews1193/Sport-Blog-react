import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import "./about.css";

export class about extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="about"> 
                    <h1>About Us</h1> 
                </div>
            </div>
            
        )
    }
}

export default about

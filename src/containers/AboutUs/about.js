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
                    <p>Buzzer Beater Sports Blog</p>
                    <p>Created by Next Level Tech</p>
                </div>
            </div>
            
        )
    }
}

export default about

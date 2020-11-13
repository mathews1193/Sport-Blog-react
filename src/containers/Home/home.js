import React, { Component } from 'react';
import "./Home.css";
import {Link} from "react-router-dom";
import logo from '../../img/logo.png';

export class home extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <div className="main-logo">
                        <img src={logo} alt="logo" width="300" height="200" />
                        <h1>Buzzer Beater</h1> 
                        <h2>Live The Moment</h2>
                        <Link to ='/signup'> <button className="btn-getstarted">Get Started</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default home

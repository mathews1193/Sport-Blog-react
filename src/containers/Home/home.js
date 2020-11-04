import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import "./Home.css";
import logo from '../../img/logo.png';

export class home extends Component {
    render() {
        return (
            <div>
                <div className="home"> 
                    <NavBar/>
                    <div className="main-logo">
                        <img src={logo} alt="logo" width="300" height="200" />
                        <h1>Buzzer Beater</h1> 
                        <h2>Live The Moment</h2>
                        <button className="btn-getstarted">Get Started</button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default home

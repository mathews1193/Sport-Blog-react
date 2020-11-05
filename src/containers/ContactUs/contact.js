import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import "./contact.css";

export class contact extends Component {
    constructor(){
        super();
        this.state = {
           
        }
    }
    render() {
        return (
            <div>
                <NavBar/>
                 <div className="contact">
                     <h1>Contact Us</h1>
                 </div>
            </div>
        )
    }
}

export default contact

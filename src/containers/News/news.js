import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import "./news.css";

export class news extends Component {
    constructor(){
        super();
        this.state = {
           
        }
    }
    render() {
        return (
            <div>
                <NavBar/>
                 <div className="news">
                     <h1>News</h1>
                 </div>
            </div>
        )
    }
}

export default news

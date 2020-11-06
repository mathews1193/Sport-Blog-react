import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import "./dashboard.css";

export class dashboard extends Component {

    post() {
        <h1>Post</h1> 
      }
    render() {
        return (
            <div>
                <NavBar/>
                <div className="dashboard"> 
                    <h1>Feed</h1> 
                    <input
                    type="text"
                    className="search-bar"
                    placeholder="Post something"/>
                    <button onClick={this.post} className="btn-post">Post</button>
                </div>
            </div>
            
        )
    }
}

export default dashboard

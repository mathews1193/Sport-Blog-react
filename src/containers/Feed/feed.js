import React, { Component } from 'react';
import "./feed.css";

export class feed extends Component {

    post() {
        <h1>Post</h1> 
      }
    render() {
        return (
            <div>
                <div className="feed"> 
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

export default feed

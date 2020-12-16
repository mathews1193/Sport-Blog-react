import React from 'react';
import "./feed.css";

export default function feed() {

    const post = () => {
        
      }
        return (
            <div>
                <div className="feed"> 
                    <h1>Feed</h1> 
                    <input
                    type="text"
                    className="search-bar"
                    placeholder="Post something"/>
                    <button onClick={post} className="btn-post">Post</button>
                </div>
            </div>
            
        )
    }

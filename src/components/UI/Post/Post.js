import React, { Component } from 'react';
import './post.css';

export class Post extends Component {
    constructor(){
        super();
        this.state = {
            imgUrl: "",
            title:"",
            author:"",
            content:"",
        }
    }
    render() {
        return (
        <div>
            <div className="post">
                <img src={this.props.post.imgUrl} alt="img" width="200" height="200"/>
                <h2>{this.props.post.title}</h2>
                <h3>Author: {this.props.post.author}</h3>
                <p>{this.props.post.content}</p>
            </div>
        </div>
        )
    }
}

export default Post

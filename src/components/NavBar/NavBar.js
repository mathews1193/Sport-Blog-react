import React from 'react';
import {Link} from "react-router-dom";
import '../../components/NavBar/NavBar.css';

export default function NavBar () {

        return (
    <div>
        <nav className='NavBar'>
        
            <ul className='list'>
                <Link to ='/' className="nav">Home</Link>
                <Link to ='/feed'className="nav">Feed</Link> 
                <Link to ='/news'className="nav">News</Link>
                <Link to ='/profile'className="nav">Profile</Link>
                <Link to ='/about'className="nav">About Us</Link>
                <Link to ='/signIn'> <button className="btn-signin">Sign In</button> </Link>
            </ul>
        </nav>
    </div>
        )
    }
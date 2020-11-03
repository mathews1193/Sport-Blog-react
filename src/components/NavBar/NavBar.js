import React from 'react';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";
import '../../components/NavBar/NavBar.css';

class NavBar extends React.Component{

    render(){
        return (
    <div>
        <nav className='NavBar'>
        
            <ul className='list'>
                <Router>
                    <Link to ='/' className="nav">Home</Link>
                    <Link to ='/about'className="nav">About Us</Link>
                    <Link to ='/profile'className="nav">Profile</Link>
                    <Link to ='/contact'className="nav">Contact Us</Link>
                    <Link className="nav">Setting</Link>
                    <Link to ='/signIn'> <button className="btn-signin">Sign In</button> </Link>
                </Router>
            </ul>
        </nav>
    </div>
        )
    }
}
export default NavBar
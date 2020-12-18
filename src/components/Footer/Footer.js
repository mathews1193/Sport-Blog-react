import React from 'react'
import './Footer.css';

const Footer = () =>{

        const name = "Sports Blog";
        const owner = "Donald Mathews";

    return(
        <footer className="bottom">
            <p className='message'> Copyright © 2020 {name} by Owner: {owner}</p>
        </footer>
        )
    }

export default Footer
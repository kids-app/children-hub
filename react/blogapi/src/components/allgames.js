import React from 'react';
import { Link } from 'react-router-dom';
import "../css/footer.css";
import "../css/nav.css";
import Nav from './nav.js';
import Footer from './footer';

export default function AllGames(){
    return(
        <>
        <Link to='/gamexo' >
         <h1>XO game</h1>
         </Link>

    <Link to='/piano' >
    <h1>Play the Piano</h1>
    </Link>
<Footer/>
<Nav/>
         </>

    )
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function AllGames(){
    return(
        <>
        <Link to='/gamexo' >
         <h1>XO game</h1>
         </Link>

    <Link to='/piano' >
    <h1>Play the Piano</h1>
    </Link>

         </>

    )
}
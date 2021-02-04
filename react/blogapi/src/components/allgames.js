import React from 'react';
import { Link } from 'react-router-dom';
import "../css/footer.css";
import "../css/nav.css";
import Nav from './nav.js';
import Footer2 from './footer2';
import "../css/games.css";

export default function AllGames(){
    return(
        <>
        <Link to='/gamexo' >
         <h1 class='xogame'>XO game</h1>
         </Link>

    <Link to='/piano' >
    <h1 class='xogame'>Play the Piano</h1>
    </Link>

<div class='game1div'>
<section class="stagegames">
  <figure class="ball"><span class="shadow"></span></figure>
</section>
</div>

<section class="stagegames2">
  <figure class="ballgames"><span class="shadow"></span></figure>
</section>

<Nav/>
         </>

    )
}




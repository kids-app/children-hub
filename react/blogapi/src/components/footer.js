import React from 'react';
import "../css/footer.css";
import { Link } from 'react-router-dom';




function Footer() {
	return (
		<>
     {/* <section class="stagee">

<Link to='/stories' >
    <figure class="balll"><img class='imgg' src={require('../pics/story3.png')}/></figure>
</Link>
</section>
<section class="stage2">
<Link >
    <figure class="ball2 bubble"><img class='img2' src={require('../pics/games.png')}/></figure>
</Link>
</section>
<section class="stage3">
<Link >
    <figure class="ball3 bubble"><img class='img3' src={require('../pics/songs.png')}/></figure>
</Link>
</section>
<section class="stage4">
<Link>
    <figure class="ball4 bubble"><img class='img4' src={require('../pics/whoknows.png')}/></figure>
</Link>
</section> */}
		<div class="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
     
		</>
		
	);
}

export default Footer;

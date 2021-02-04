import React from 'react';
import "../css/home.css";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Footer from './footer';
// import Nav from 'components/nav.js';


class Home extends React.Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderlogin = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }
    render() {
        return (
            <>
             <Footer />
          
                {this.renderlogin()}
                <main class='main'>
              
                    <section class="stage">
                        <Link onClick={this.setRedirect}>
                            <figure class="ballmain bubble"><img class='img1' src={require('../pics/story3.png')}/></figure>
                        </Link>
                        
                        
                       
                    </section>
                    <section class="stage2">
                        <Link onClick={this.setRedirect}>
                            <figure class="ball2 bubble"><img class='img2' src={require('../pics/games.png')}/></figure>
                        </Link>
                    </section>
                    <section class="stage3">
                        <Link onClick={this.setRedirect}>
                            <figure class="ball3 bubble"><img class='img3' src={require('../pics/songs.png')}/></figure>
                        </Link>
                    </section>
                    <section class="stage4">
                        <Link onClick={this.setRedirect}>
                            <figure class="ball4 bubble"><img class='img4' src={require('../pics/whoknows.png')}/></figure>
                        </Link>
                    </section>
                    <button class="signin" type="button" onClick={this.setRedirect}>Sign In</button>
                    
                </main>
               
                
            </>
        )
    }
}

export default Home;





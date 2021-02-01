import React from 'react';
import "../css/home.css";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';


class HomeAfter extends React.Component {
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
                <main>
                    <section class="stage">

                        <Link to='/stories' >
                            <figure class="ball bubble"></figure>
                        </Link>
                    </section>
                    <section class="stage2">
                        <Link >
                            <figure class="ball2 bubble"></figure>
                        </Link>
                    </section>
                    <section class="stage3">
                        <Link >
                            <figure class="ball3 bubble"></figure>
                        </Link>
                    </section>
                    <section class="stage4">
                        <Link>
                            <figure class="ball4 bubble"></figure>
                        </Link>
                    </section>
                    {this.renderlogin()}
                    <button class="signin" type="button" onClick={this.setRedirect}>Sign Out</button>
                </main>
                <script src="app.js"></script>
            </>
        )
    }
}

export default HomeAfter;





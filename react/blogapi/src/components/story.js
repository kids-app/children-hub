import React, { Component } from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import axiosInstance from '../axios';
import PostLoadingComponent from './postLoading';
import Footer from './footer';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

function Joudi  ({match}){
        var baseURL=`https://stories-api-for-kids.herokuapp.com/api/${match.params.id}/`
        const axiosInstance = axios.create({
            baseURL: baseURL,
            timeout: 5000,
            headers: {
                Authorization: localStorage.getItem('access_token')
                    ? 'JWT ' + localStorage.getItem('access_token')
                    : null,
                'Content-Type': 'application/json',
                accept: 'application/json',
            }, 
        });
        const PostLoading = PostLoadingComponent(Sondos);

            const [appState, setAppState] = useState({
                loading: true,
                post: null,
            });
            useEffect(() => {
                axiosInstance.get().then((res) => {
                    const detailPost = res.data;
                    setAppState({ loading: false, post: detailPost });
                    console.log(res);
                });
            }, [setAppState]);
            return(
                <div>
                       <PostLoading isLoading={appState.loading} post={appState.post} />
                </div>
    )

}
    function Sondos(props){
        return(
           <>
            <div>
                <h1>{props.post.title}</h1>
                <img src={props.post.img}/>
                <audio src={props.post.audio} controls> <embed src={props.post.audio} width="300" height="90" loop="false" autostart="false"></embed> </audio>
                <p>{props.post.content}</p>
                <div> <Link to={`/guessing/${props.post.id}`} >Guessing Game</Link></div>
            
            </div>
            <Footer />
            </>
        )

    }
export default Joudi;  
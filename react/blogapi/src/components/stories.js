

import React, { Component }  from "react";
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import PostLoadingComponent from './postLoading';
import axiosInstance from '../axios';
import Footer from './footer';
import '../stories.css';


function Stories() {
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
      loading: true,
      posts: null,
  });
  useEffect(() => {
      axiosInstance.get().then((res) => {
          const allPosts = res.data;
          setAppState({ loading: false, posts: allPosts });
          console.log(res.data);
      });
  }, [setAppState]);
  return (
      <div >
         
          <PostLoading isLoading={appState.loading} posts={appState.posts} />
      </div>
  );
}
class Posts extends Component {
    constructor(props){

        super(props);
    }
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }
  static get CARD_STYLE() {
    return {
      height: "350px",
      width: "350px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#52C0F5",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }
  render() {
      console.log(this.props.posts)
    return (


            <>
            <div style={Posts.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
            {this.props.posts.map((post)=>{
              return(
              
                <div style={Posts.CARD_STYLE}><Link to={`/${post.id}`}  >
                  <img src={post.img}/><h2>{post.title}</h2></Link></div>
          
              )  
              
            })}
            </ReactCardCarousel>
          </div>

          <Footer />

        </>

          

     
    );
  }
}
// export default Posts;
export default Stories;






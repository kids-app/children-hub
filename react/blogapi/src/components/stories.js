
import '../stories.css'

import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
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
            <body>
            <div style={Posts.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
            {this.props.posts.map((post)=>{
              return(
              
                <div style={Posts.CARD_STYLE}><img src={post.img}/><h2>{post.title}</h2></div>
          
              )  
              
            })}
            </ReactCardCarousel>
          </div>
          </body>
        
     
    );
  }
}
export default Posts;





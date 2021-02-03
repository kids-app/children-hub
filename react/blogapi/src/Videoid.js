import React, { useState, useRef, useEffect } from "react";
import App from './App';

function Videoid({match}){
  
    console.log(match.params.id)
        return(
          <div>
          <Sss id={match.params.id} />
          <App/>
    </div>
     
        )
      }
function Sss(props){
    return(
    <>
    
    <iframe width="500" height="200" src={"https://www.youtube.com/embed/"+props.id} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
        </>
    )
    
}  
export default Videoid
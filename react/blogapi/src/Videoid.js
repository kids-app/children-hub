import React, { useState, useRef, useEffect } from "react";
import Youtube from './Youtubek';
import "./css/youtube.css";
function Videoid({match}){
  
    console.log(match.params.id)
        return(
            <>
          <div className='mainVid'>
          <Sss id={match.params.id} />
          </div>
          <div className='allVid'>
          <Youtube/>
          </div>
         
   
     </>
        )
      }
function Sss(props){
    return(
    <>
    
    <iframe className='iframe'  src={"https://www.youtube.com/embed/"+props.id} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
        </>
    )
    
}  
export default Videoid
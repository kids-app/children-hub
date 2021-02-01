

// import React, { useState } from 'react';
// import ReactPlayer from 'react-player'
// export default function Songs (){
//     var arr =[]
//     axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLT1rvk7Trkw5eWUxZCT-w2USwJxEcw-xb&key=AIzaSyD4ymzgWkxRKeh_o-2JkLU7cZWCGxm0AoM').then(resp => {
    
//         resp.data.items.map(item=>{
//             return(
//                 arr.push(item.snippet.resourceId.videoId)
//             )
//             // var songId=item.snippet.resourceId.videoId
//         })
       
//     }) 
//      return (
//     	<div className='player-wrapper'>
//         {arr.map(itm=>{
//             return(
//                 // <ReactPlayer
//                 // url={`https://www.youtube.com/embed/${itm}`}
//                 // className='react-player'
//                 // playing
//                 // width='100%'
//                 // height='100%'
//                 // />
//                 <h2>{itm}</h2>
//                 // <ReactPlayer url={`https://www.youtube.com/embed/${itm}`} />

//             )
//         })}
        
//       </div>
//     )        
// }      
// const axios = require('axios');


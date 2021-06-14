import React from 'react';
import  './VideoItem.css'


const VideoItem = (props) => {
   
    return (
    <div onClick={() => props.onVideoSelect(props.video)} className="item video-item">
        <img alt="video" className="ui image" src={props.video.snippet.thumbnails.medium.url} />
        <div className="content">
            <p className="header" >{props.video.snippet.title}</p>
        </div>
    </div>

     
    );



}

export default VideoItem;

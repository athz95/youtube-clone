import React from 'react';
import "./videorow.css";

function VideoRow({ views, subs, description, timestamp, channel, title, image}) {
    return (
        <div className="videorow">
            <img src={image} alt="" />

            <div className="videorow-text">
             <h3>{title}</h3>
             <p className="videorow-headline">
                 {channel} . {" "}
                 <span className="videorow-subs">
                      <span className="videorow-subsnumber"> {subs}</span> Subscribers </span> {" "}
                 
                  {views} views . {timestamp}
             </p>
               <p className= "videorow-description" >{description}</p>

            </div>
        </div>
    )
}

export default VideoRow

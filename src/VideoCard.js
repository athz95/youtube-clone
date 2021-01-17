import React from 'react';
import "./videocard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, title, channel, timestamp, views, channelImage }) {
    return (
        <div className="videocard">
            <img className="videocard-thumbnail" src={image} alt="" />

            <div className="videocard-info">
              <Avatar className="videocard-avatar" 
              alt={channel} 
              src={channelImage}
              />
              <div className="videocard-text">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>
                  {views} . {timestamp}
              </p>
              </div>
            </div>
        </div>
    )
}

export default VideoCard

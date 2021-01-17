import React from 'react';
import "./channelrow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';


function ChannelRow({ image, channel, subs, noOfVideos, description, verified}) {
    return (
        <div className="channelrow">
            <Avatar 
              className="channelrow-logo"
              alt={channel} src={image}
            />

        <div className="channelrow-text">           
        <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />} </h4>
        <p> {subs} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
         </div>

        </div>
    )
}

export default ChannelRow

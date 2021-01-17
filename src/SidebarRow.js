import React from 'react';
import "./sidebarRow.css";


function SidebarRow({ selected, Icon, title }) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow-icon" />
            <h2 className="sidebarRow-title"> {title} </h2>
        </div>
    )
}

export default SidebarRow

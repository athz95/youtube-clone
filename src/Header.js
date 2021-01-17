import React, {useState} from 'react';
import "./header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";



function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header-left">
            <MenuIcon />
            <Link to="/">
            <img 
             className="header-logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png"
             alt="youtubr-logo"
            />
            </Link>
            
            </div>
           
            <div className="header-input">
            <input 
            value={inputSearch} 
            type="text"
            placeholder="Search"
            onChange={e => setInputSearch(e.target.value)} 
             />
             <Link to={`/search${inputSearch}`}>
             <SearchIcon className="header-inputbutton"/>
             </Link>
            
            </div>
            
            <div className="header-icons">
            <VideoCallIcon className="header-icon"/>
            <AppsIcon className="header-icon"/>
            <NotificationsIcon className="header-icon"/>
            <Avatar 
               alt="Akhtar Hassan"
               src="https://lh3.googleusercontent.com/a-/AOh14GjnRHAg-raMhOUJsclNRpFwuohwtP_zvMG1c8YDI6E=s88-c-k-c0x00ffffff-no-rj-mo"
            />
            </div>
            
            
        </div>
    )
}

export default Header;

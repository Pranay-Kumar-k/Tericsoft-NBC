import React from 'react';
import "./Navbar.scss";
import logo from "../assets/nbc_logo.png";
import search from "../assets/search.svg";
import settings from "../assets/settings.svg";
import { NavLink } from 'react-router-dom';

const navLinks = [
    {
        title:"Home",
        to:"/home"
    },
    {
        title:"Sports",
        to:"/sports"
    },
    {
        title:"Day's Events",
        to:"/events"
    },
    {
        title:"Medal Table",
        to:"/medals-table"
    }
]

const Navbar = () => {
    return (
        <div className="Navbar">
            <div>
                <img src={logo} alt="logo" />
            </div>
            {navLinks.map((link) => {
                return (<div key={link.title}>
                    <NavLink className="link" to={link.to} 
                        activeStyle={{
                            fontWeight:900,
                            textDecoration:"underline",
                            border:"1px solid black",
                            padding:"5px 16px 10px 16px",
                            background:"black",
                            borderRadius:"30px"
                            }}>
                                {link.title}</NavLink>
                </div>)
            })}
            <NavLink to="/search" 
                activeStyle={{border:"2px solid white",borderRadius:"50%",padding:8,background:"black"}}>
                <img src={search} alt="search" width="42px"/>
            </NavLink>
            <NavLink to="/settings" activeStyle={{border:"2px solid white",borderRadius:"50%",padding:8,background:"black"}}>
                <img src={settings} alt="settings" width="42px"/>
            </NavLink>
        </div>
    )
}

export default Navbar
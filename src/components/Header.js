import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import {Link} from "react-router"
const Header=()=>{

    let [bntName,setBntName]=useState("login");

    return (
        <div className="header">
            <div className="logo">
                <img src={CDN_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="btn-login" onClick={
                        ()=> {
                            return bntName==="login" ?
                            setBntName("logout"):setBntName("login");
                        }
                    }>{bntName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;
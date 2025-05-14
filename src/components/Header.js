import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const Header=()=>{

    let [bntName,setBntName]=useState("login");

    return (
        <div className="header">
            <div className="logo">
                <img src={CDN_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
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
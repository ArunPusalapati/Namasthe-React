import { useState } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const {loggedInUser}=useContext(UserContext)
    let [bntName,setBntName]=useState("login");
    const online=useOnlineStatus();

    return (
        <div className="flex justify-between bg-amber-300 shadow-black h-35">
            <div className="p-4  w-30 h-30">
                <img src={CDN_URL} />
            </div>
            <div>
            <div className="flex item-center">
                <ul className="flex py-15 justify-between">
                    <li className="px-6 ">Online:{online?"✅":"❌"}</li>
                    <li className="px-6 text-white hover:bg-black | rounded-lg" ><Link to="/" >Home</Link></li>
                    <li className="px-6 text-white hover:bg-black | rounded-lg"><Link to="/about">About us</Link></li>
                    <li className="px-6 text-white hover:bg-black | rounded-lg"><Link to="/contact">Contact us</Link></li>
                    <li className="px-6 text-white hover:bg-black | rounded-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-6 text-white hover:bg-black | rounded-lg">Cart</li>
                    <button className="px-6 py-2 bg-black text-white rounded-lg" onClick={
                        ()=> {
                            return bntName==="login" ?
                            setBntName("logout"):setBntName("login");
                        }
                    }>{bntName}</button>
                    <li className="px-6 text-white rounded-lg">{loggedInUser}</li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Header;
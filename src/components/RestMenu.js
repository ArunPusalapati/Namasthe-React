
import {useEffect,useState} from "react";
import SkimmerUI from "./SkimmerUI";
const RestMenu=()=>{
const [Restinfo,setRestinfo]=useState([]);


    useEffect(
        ()=>{
        fetchMenu();
    }
    ,[])


const fetchMenu= async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=986926&catalog_qa=undefined&submitAction=ENTER");
    const json=await data.json();
    
    // console.log(json?.data?.cards[2].card?.card?.info);
    setRestinfo(json?.data?.cards[2].card?.card?.info);
}
   if(Restinfo.length===0)
    return <SkimmerUI/>
    return (
        <div className="Menu">
           <h1>{Restinfo.name}</h1>
           <h1>{Restinfo.areaName}</h1>
           <h2>{Restinfo.costForTwoMessage}</h2>
           <h2>{Restinfo.cuisines.join(",")}</h2>
        </div>
    );
}

export default RestMenu;
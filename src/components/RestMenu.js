
import {useEffect,useState} from "react";
import SkimmerUI from "./SkimmerUI";
import { useParams } from "react-router";
// import { REST_URL } from "../utils/constants";

const RestMenu=()=>{
const [Restinfo,setRestinfo]=useState(null);
const [restaurantMenu,setRestaurantMenu]=useState([]);


const {resid}=useParams();


    useEffect(
        ()=>{
        fetchMenu();
    }
    ,[])


const fetchMenu= async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resid +"&catalog_qa=undefined&submitAction=ENTER");
    const json=await data.json();
    console.log(json);
    //  console.log(json?.data?.cards[2].card?.card?.info);
    setRestinfo(json?.data?.cards[2].card?.card?.info);
    setRestaurantMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    
}
 
   if(Restinfo===null )
    return <SkimmerUI/>;
    return (
        <div className="Menu">
           <h1>{Restinfo.name}</h1>
           <h1>{Restinfo.areaName}</h1>
           <h2>{Restinfo.costForTwoMessage}</h2>
           <h2>{Restinfo.cuisines.join(",")}</h2>
            <h4>Menu:</h4>
           <ul >
           {restaurantMenu.map((item)=>
           <li key={item.card.info.id}>{item.card.info.name}</li>)}
           </ul>
        </div>
    );
}

export default RestMenu;
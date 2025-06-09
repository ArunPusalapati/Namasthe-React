
import {useEffect,useState} from "react";
import SkimmerUI from "./SkimmerUI";
import { useParams } from "react-router";
// import { REST_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestMenu=()=>{
const [showIndex,setShowIndex]=useState(null);
const {resid}=useParams();
const restInfo=useRestaurantMenu(resid)
// console.log(restInfo)
   if(restInfo===null )
    return <SkimmerUI/>;
   const categories=restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   )
   const {name,city,costForTwoMessage,cuisines}=restInfo?.cards[2]?.card?.card?.info;
    return (
        <div  className="bg-white">
            <div className="mb-4 ">
                <div>
                    <h1 className="font-bold text-2xl text-center m-2">{name}</h1>
                </div>
           <div className="border-6 border-gray-800 rounded-2xl shadow-2xl animate-pulse font-serif w-190 m-auto">
            <p className="text-center font-blold">{city}</p> 
           <p className="text-center font-blold">{costForTwoMessage}</p> 
            <p className="text-center font-blold">{cuisines.join(",")}</p> 
           </div>
           
            </div>
           {/* ctaegories*/}
            {categories.map((category,index)=>
            <div className=" " key={category.card.card.categoryId} >
            <RestaurantCategory 
            showIndex={index===showIndex?true:false} 
            setShowIndex={()=>setShowIndex(index)}
            category={category} />
            </div>
            )}

        </div>
    );
}

export default RestMenu;

import {useEffect,useState} from "react";
import SkimmerUI from "./SkimmerUI";
import { useParams } from "react-router";
// import { REST_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestMenu=()=>{

const resid=useParams();
const restInfo=useRestaurantMenu(resid)
console.log(resid)
console.log(restInfo)
   if(restInfo===null )
    return <SkimmerUI/>;
   const categories={}
    return (
        <div >
           {/* <h1 className="font-bold text-2xl text-center m-2">{restInfo.name}</h1>
           <p className="text-center font-blold">{restInfo.areaName}</p> */}
           {/* ctaegories*/}
           {/* {categories.map((category)=><RestaurantCategory key={category.card.card.categoryId} category={category}/>)} */}
        </div>
    );
}

export default RestMenu;
import { useEffect,useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu=(resid)=>{
    const [resList,setResList]=useState(null);
     useEffect(
        ()=>{
        fetchMenu(resid);
    }
    ,[])
   const fetchMenu= async(resid)=>{
      const data =await fetch(MENU_URL+resid);
      const json= await data.json();
      setResList(json.data);
      // console.log(json);

   }
   return resList
}
export default useRestaurantMenu;
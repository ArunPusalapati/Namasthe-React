
import RestoCard  from "./RestoCard";
import { useState } from "react";
import { useEffect } from "react";
import SkimmerUI from "./SkimmerUI";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"
const Body=()=>{
    let [resList,setRestoData]=useState([]);
    const [filteredList,setFilteredList]=useState([]);
    const [searchValue,setSearchValue]=useState("");

  

    useEffect(
        ()=>{
            fetchData();
        },[]
    )
    const fetchData=async ()=>{
        const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setRestoData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    const status=useOnlineStatus();
    if(status===false)
        return <h1> You are Offline try to reconnect</h1>
    
             
    return resList.length===0 ? <SkimmerUI/> :(
        <div className="Body" >
            <div className="flex m-4">
                <div >
                    <input className="border" type="text" value={searchValue} onChange={
                        (e)=>setSearchValue(e.target.value)
                    }>
                    </input>
                    <button className="mx-2 px-5 bg-black text-white p-2 rounded-sm cursor-pointer" onClick={
                        ()=>{
                            resList=filteredList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()))
                            setRestoData(resList);
                        }
                    }>Search</button>
                </div>
                <div className="mx-5">
                <button className="px-5 bg-black text-white p-2 rounded-sm cursor-pointer" onClick={()=>{
                    resList=resList.filter((restaurant)=>restaurant.info.avgRating>4.4);
                    setRestoData(resList);
                }
                }
                >Top Rated Restaurant</button>
                </div>
            </div >
            <div className="mx-auto">
            <div className="flex flex-wrap ">
             {resList.map((restaurant)=>
             <Link to={"/restaurantS/"+ restaurant.info.id} key={restaurant.info.id}> <RestoCard  restoCrad={restaurant} /></Link>)}
             {/* <RestoCard  restoCrad={restoData}/> */}
            </div>
            </div>
        </div>

    );
}

export default Body;
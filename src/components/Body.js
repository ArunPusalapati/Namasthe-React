
import RestoCard  from "./RestoCard";
import { useState } from "react";
import { useEffect } from "react";
import SkimmerUI from "./SkimmerUI";
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
     
    const updateData=()=>{
        console.log("mouse Scrolled");
    }
    
             
    return resList.length===0 ? <SkimmerUI/> :(
        <div className="Body" >
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchValue} onChange={
                        (e)=>setSearchValue(e.target.value)
                    }>
                    </input>
                    <button onClick={
                        ()=>{
                            resList=filteredList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()))
                            setRestoData(resList);
                        }
                    }>Search</button>
                </div>
                <button className="btn-rated" onClick={()=>{
                    resList=resList.filter((restaurant)=>restaurant.info.avgRating>4.4);
                    setRestoData(resList);
                }
                }
                >Top Rated Restaurant</button>
            </div>
            <div className="card-container" onWheel={
            ()=>updateData()
        }>
             {resList.map((restaurant)=><RestoCard key={restaurant.info.id} restoCrad={restaurant} />)}
             {/* <RestoCard  restoCrad={restoData}/> */}
            </div>
        </div>

    );
}

export default Body;
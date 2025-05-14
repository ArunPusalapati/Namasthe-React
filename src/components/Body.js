
import RestoCard  from "./RestoCard";
import { useState } from "react";
import { useEffect } from "react";
import SkimmerUI from "./SkimmerUI";
const Body=()=>{
    let [resList,setRestoData]=useState([]);
    useEffect(
        ()=>{
            fetchData();
        },[]
    )
    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&offset=${cart}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
        const json=await data.json();
        setRestoData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    
             
    return resList.length===0 ? <SkimmerUI/> :(
        <div className="Body">
            <div className="search">
                <button className="btn-rated" onClick={()=>{
                    resList=resList.filter((restaurant)=>restaurant.info.avgRating>4.5);
                    setRestoData(resList);
                }
                }
                >Top Rated Restaurant</button>
            </div>
            <div className="card-container">
             {resList.map((restaurant)=><RestoCard key={restaurant.info.id} restoCrad={restaurant}/>)}
             {/* <RestoCard  restoCrad={restoData}/> */}
            </div>
        </div>

    );
}

export default Body;
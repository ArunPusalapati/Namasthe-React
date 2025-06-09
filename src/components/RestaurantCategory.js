import {useState} from "react"
import ItemCards from "./ItemCards";
const RestaurantCategory=(props)=>{
    // const [showAccordion,setShowAccordion]=useState(false);
    
    const setShowIndex=props.setShowIndex;
    const showIndex=props.showIndex
    const{title,itemCards}=props.category.card.card
    const handle=()=>{
        setShowIndex();
        
    
    }
    // console.log(props)
    return (
        <div className="bg-gray-200 text-center p-2 mx-100  mb-1 rounded-sm shadow-2xl">
            {/* header */}
            <div className="py-3 font-bold flex justify-between" onClick={handle}>
                <p>{title}({itemCards.length})</p>
                <svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8 cursor-pointer"viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        
            </div>
           
             {showIndex&&<ItemCards itemCards={itemCards}></ItemCards>}
        </div>
    );
}
export default RestaurantCategory
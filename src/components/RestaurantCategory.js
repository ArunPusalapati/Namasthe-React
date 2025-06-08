import { LOGO_URL } from "../utils/constants";
import {useState} from "react"
const RestaurantCategory=(props)=>{
    const [showAccordion,setShowAccordion]=useState(false);
    const{title,itemCards}=props.category.card.card
    console.log(props)
    return (
        <div className="border-b-2 border-gray-400 text-center p-2 mx-100">
            {/* header */}
            <div className="py-3 font-bold flex justify-between" onClick={()=>{
                setShowAccordion(!showAccordion)
            }}>
                <p>{title}</p>
                <svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8 cursor-pointer"viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        
            </div>
           
             {showAccordion===true?
                
            <div className="w-200">
                {itemCards.map((item)=>
                <div key={item.card.info.id} className="mb-3 mx-auto">
                    <div className="flex justify-between mb-5 ">
            <p className="font-bold">{item.card.info.name}</p>
            <button className="z-1 absolute ml-155 mt-15 bg-white px-2 py-1 mr-2 cursor-pointer border-1 border-green-900 rounded hover:bg-gray-300">add</button>
            <img  className="w-20 h-20 absolute ml-150 pb-2 mb-5 rounded-lg" src={LOGO_URL+item.card.info.imageId}/>
            
            </div>
            <div className="text-left">
            <p >₹{item.card.info.price/100}</p>
            <p className="w-8/12">{item.card.info.description}</p>
            </div>
           
            </div>
             )}
            </div> 
                :null
}
        </div>
    );
}
export default RestaurantCategory
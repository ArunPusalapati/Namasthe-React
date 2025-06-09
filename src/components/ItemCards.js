import { LOGO_URL } from "../utils/constants";
const ItemCards=({itemCards})=>{
    return (
            <div className="w-200">
                {itemCards.map((item)=>
                <div key={item.card.info.id} className=" my-4 mr-30 border-b  border-gray-400  mx-auto">
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
    );
}

export default ItemCards;
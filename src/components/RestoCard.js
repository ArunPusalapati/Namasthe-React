
import  {LOGO_URL } from "../utils/constants";

const RestoCard=(props)=>{
    const {restoCrad}=props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating
    }=restoCrad?.info;
    return (
        <div className=" rounded w-70 h-100 m-5 bg-blue-100  shadow-2xl hover:border-2 border-blue-200">

        <img className="px-6 py-3 w-full h-50 rounded-lg" src={LOGO_URL +cloudinaryImageId}/>
        <div className="ml-5">
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} rating</h4>
        </div>
        </div>
        
    );
}
export const isOpen=(RestoCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="px-4 rounded absolute mt-5 ml-4 bg-black text-white">Open</label>
                <RestoCard {...props}/>
            </div>
        );
    }
}
export default RestoCard;
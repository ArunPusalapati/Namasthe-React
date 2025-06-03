
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
        <div className="border-2 border-b-black rounded w-50 h-full  bg-blue-100 m-6 shadow-2xl">

        <img className="px-6 py-3 w-50 h-50 rounded-lg" src={LOGO_URL +cloudinaryImageId}/>
        <div className="ml-5">
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} rating</h4>
        </div>
        </div>
        
    );
}
export default RestoCard;
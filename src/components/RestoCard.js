
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
    console.log(props);
    return (
        <div className="resto-card">

        <img className="resto-logo" src={LOGO_URL +cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} rating</h4>
        </div>
    );
}
export default RestoCard;

import RestoCard  from "./RestoCard";
import { restoData } from "../utils/mockData";
const Body=()=>{
    return (
        <div className="Body">
            <div className="search">
                <h3>Search</h3>
            </div>
            <div className="card-container">
             {restoData.map((restaurant)=>(<RestoCard key={restaurant.info.id} restoCrad={restaurant}/>))}
             {/* <RestoCard  restoCrad={restoData}/> */}
            </div>
        </div>

    );
}
export default Body;
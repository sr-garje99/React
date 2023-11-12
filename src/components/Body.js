import Cards from "./Cards";
import resData from "../utils/mockData";
const Body =()=>{
    var p = resData[0];
    return(
       
        <div className="body">
            <div className="res-container">
            {resData.map((resturant) => (
                <Cards resData={resturant}/>
            ))}
            </div>
        </div>
    )
}

export default Body;
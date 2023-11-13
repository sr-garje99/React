import Cards from "./Cards";
import resData from "../utils/mockData";
import { useState } from "react";
const Body =()=>{
    var p = resData[0];
    const [toplist,setToplist] = useState(resData);
    return(
       
        <div className="body">
            {console.log("body rendered")}
            <div className="filter-search">
                <button className="filter"
                    onClick={()=>{
                        setToplist(
                            toplist.filter(
                                (res)=>res.info.avgRating>=4.5
                                )
                            );
                    }}
                >
                    top rated
                </button>
            </div>
            <div className="res-container">
            {toplist.map((resturant) => (
                <Cards resData={resturant}/>
            
            ))}
            </div>
        </div>
    )
}

export default Body;
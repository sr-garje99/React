import { IMAGE_URL } from "../utils/constants";

const Cards =(props)=>{
    let {resData} =props;
    return(
        <div className="restauCard">
            <div className="image-container">
             <img className="image"src={IMAGE_URL+resData.info.cloudinaryImageId}></img>
            </div>
            <h4>{resData.info.name}</h4>
            <h4>{resData.info.cuisines.join(",")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h5>{resData.info.areaName}</h5>

        </div>
    )
}
export default Cards;
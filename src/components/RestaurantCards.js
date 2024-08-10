import { useContext } from "react"
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/UserContext"
const ResturtantCards=(props)=>{
    const {resData} = props
    // console.log("qwerty",resData)

    const {name,cuisines,avgRating,costForTwo,sla} =resData?.info
    const {loggedInUser} =useContext(UserContext)
     return(
    <div className="m-4 p-4 w-[240] rounded-lg bg-gray-50 hover:bg-gray-300" >
        <img className="w-60 mt-1 ml-3 rounded-md shadow-md" alt="res-logo" 
        src={CDN_URL + resData.info.cloudinaryImageId} />

        <h3 className="font-bold text-xl  font  mt-4 ml-4">{name}</h3>
        <h4 className="ml-4 mt-1 truncate font-semibold hover:text-clip">{cuisines.join(",")}</h4>
        <h4 className="ml-4 mt-1">Rating : {avgRating} stars</h4>
        <h4 className="ml-4 mt-1">{costForTwo}</h4>
        {/* <h4 className="ml-4 mt-1">Delivery: {sla.deliveryTime} min</h4>  */}
        <h4>{loggedInUser}</h4>
        {/* <div>Resturtant Name</div>
        <div>Dish Name</div>
        <div>Rating</div>
        <div>Time to deliver</div> */}

    </div>)
}

//higher order component , hoc function takes component as input and return a enhanced function
//it takes input -RestaurantCard => Restaurant Card Promoted

export const withPromotedLabel=(ResturtantCards)=>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white ml-5 mt-3 p-1 rounded-lg">Promoted</label>
                <ResturtantCards {...props} />
            </div>
        )
    }
}
export default ResturtantCards
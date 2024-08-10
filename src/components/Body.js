import ResturtantCards, { withPromotedLabel } from "./RestaurantCards"
import resList from "../utils/mockData"
import { useContext, useEffect, useState } from "react"
import Shimmer from "./Shimmer.js"
import {BODY_API} from '../utils/constants.js'
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js"
import Footer from "./Footer.js"
import UserContext from "../utils/UserContext.js"

const Body=()=>{
// const arr = useState( resList)
// const listOfRestaurants =arr[0]
// const setListOfRestaurants =arr[1]
const [listOfRestaurants,setListOfRestaurants] = useState([]) //this is same as above
const [searchText,setSearchText] = useState("")
const [filteredRestaurant,setFilteredRestaurant] = useState([])
// console.log("ListOfRestaurants",listOfRestaurants)
const RestaurantCardPromoted = withPromotedLabel(ResturtantCards) 
const {loggedInUser,setUserName} =useContext(UserContext)

useEffect(()=>{
    fetchData()    
},[])

const fetchData = async ()=>{
    // console.log("I will add the live Swigg API Later because it is not working right now")
    const data= await fetch(BODY_API)
    const json= await data.json();
    console.log("swiggylive data",json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurants(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    // setListOfRestaurants(resList)
    // setFilteredRestaurant(resList)
    // console.log("cards",resList)
}
// this is custom hook for showing onlineStatus
const onlineStatus = useOnlineStatus();

if(onlineStatus !=true) 
    {
        return (<h1> Looks like you're offline!!! please check your Internet Connection</h1>)
    }
            
//this is known as conditional Rendering
    // if(filteredRestaurant.length == 0) return (<Shimmer />)

    return (
        <div className="">
           <div className="filter flex">

            <div className="search p-4 m-4">
                <input className="ml-1 mb-4 shadow appearance-none border border-black rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search Restaurtant" type="text" 
                value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={()=>{
                    const filteredRestaurtant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurtant)
                    console.log("xxxxxxxxxxxxx",filteredRestaurant)
                }} >
                    Search
                </button> 
                </div>
                
                <div className=" m-4 p-4 flex items-center"> 
                    <button className=" bg-gray-200 px-4 py-2 rounded-lg" onClick={() =>{
                        let filterLogic = filteredRestaurant.filter((res)=>res.info.avgRating
                        > 4 )
                        setFilteredRestaurant(filterLogic)
                        console.log("this is filter Logic ",filterLogic)    
                    }}>              
                Top Rated Restaurant
            </button>
          </div>
          
          <div className="m-4 p-4 flex items-center">
            <label>User Name : </label>
                    
            <input className="border border-black m-2 p-4 " placeholder="Enter Text" value={loggedInUser}
            onChange={(e)=>setUserName(e.target.value)} />
          </div>

           </div>

              
            <div className="flex flex-wrap">
                
                {filteredRestaurant?.map((restaurant,index)=>(
                    <Link to={'/restaurtants/'+ restaurant.info.id} key={restaurant.info.id}>
                        {/* if a restaurtant is promoted then show promoted label to it and i can do this by HOC */}
                        {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <ResturtantCards  resData={restaurant}/> }
                        
                    </Link>))}                          
            </div>
                    {/* <Footer/> */}
        </div>
    )
}

export default Body
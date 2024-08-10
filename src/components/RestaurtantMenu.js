import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/userRestaurantMenu";
import  RestaurantCategory  from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo =useRestaurantMenu(resId)
    const [showIndex,setShowIndex] = useState(null)

    // const fetchMenu = async() =>{
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json()
    //     console.log("swiggy live Rest Menu:",json?.data?.cards[2]?.card?.card?.info)
    //     setResInfo(json.data)
    //     // console.log("Res menu data ?.data?.cards[2]?.card?.card?.info :",resList)
    //     // resInfo?.cards[2]?.card?.card?.info
    // }
if(resInfo === null)  return <Shimmer/> ;

    const {name,locality,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} =resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card
    // console.log("this is item Card",resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat)=> cat.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

    // console.log("categories",categories)



    return  ( 
        <div className="text-center m-4 p-1">
            
            <h1 className="font-bold my-6 text-2xl ">{name}</h1>            
            <p className="m-4 font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>            
            <h2 className="font-bold text-5xl m-4 bg-slate-600 tracking-wide">Menu Items</h2>
            {categories.map((category,index)=>
            //    this is controlled component
               <RestaurantCategory 
               key={category.card.card.name}
                data={category?.card?.card}
                showItems={index == showIndex ? true : false}
                setShowIndex={()=>setShowIndex(index)} />
            )}
        </div>
    )
}

export default RestaurantMenu
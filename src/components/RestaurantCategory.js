import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data,showItems,setShowIndex}) =>{
    // console.log("data Card",data)
        const handleClick = () =>{
            setShowIndex();
    }
       return (
        <div className="w-6/12 bg-gray-50 mx-auto my-6 shadow-lg p-4  ">
            {/* header */}
            <div className="flex justify-between cursor-pointer relative " onClick={handleClick}>
                <span className="text-2xl font-extrabold ">
                 {data?.title} 
                    ({data.itemCards.length})
                 </span>
        <span class="glyphicon glyphicon-arrow-down"></span>
        </div>

        {/* this is controlled component by RestaurantMenu(parent) */}
      
       {showItems && <ItemList items={data.itemCards} /> }
        </div>
    )
}

export default RestaurantCategory
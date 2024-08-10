import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({items}) =>{
    // console.log("items Card",items)
    const dispatch = useDispatch()
    const handleAddItems = (item)=>{
        //Dispatch the action 
        dispatch(addItems(item))
    }
    return (
        <div >
            {items?.map((item)=>{ 
                return (
                    
                    <div key={item?.card?.info?.id} 
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    
                        <div className="w-9/12">
                        <div className="py-2 text-2xl font-medium">
                            <span>{item?.card?.info?.name}</span>
                            <span> 
                                - ₹ 
                                {item?.card?.info?.price ? item?.card?.info?.price/100 :item?.card?.info?.defaultPrice/100}
 
                            </span>
                        </div>
                        <p className="text-lg">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4 rounded-xl">
                            <div className="absolute">
                                <button className="p-2 mx-20 b rounded-xl bg-black shadow-lg text-white "
                                onClick={()=>handleAddItems(item)}> Add +</button>
                            </div>
                        
                                <img src={CDN_URL + item?.card?.info?.imageId}  />                        
                        </div>                        

                    </div>
                    )
                })}
        
        </div> 
    )
}

export default ItemList;
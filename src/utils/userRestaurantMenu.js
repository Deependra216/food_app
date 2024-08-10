//Lets Us Create Our Own Custom Hook to fetch the Data from API

import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId)=>{
const [resInfo,setResInfo] = useState(null)
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(MENU_API + resId) 
        const json = await data.json();
        setResInfo(json.data)
    }
    return resInfo;
}
export default useRestaurantMenu;
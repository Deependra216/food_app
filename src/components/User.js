import { useEffect } from "react";

const User= (props)=>{
    // console.log("props from function",props)
    useEffect(()=>{
        const timer=setInterval(()=>{    
            console.log("NAMASTE REACTOP")
        },1000)
       
        console.log("useEffect Called")

            
    return ()=>{
        clearInterval(timer) //this will when i change my page or i can say it is same as componentwillUnmount()
        console.log("useEffect RETURN called")
    }
    },[])

    console.log("Render Called")
    return (
        <div className="user-card">
            <h1>Name : {props.name} </h1>
            <h2>Location : {props.location}</h2>
            <h2>Contact : 9584899882</h2>
        
        </div>
   
)
    
}

export default User;
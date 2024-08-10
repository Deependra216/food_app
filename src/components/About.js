import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor()
    {
        super()
    //     console.log("parent Constructor Called")
    }

    // componentDidMount(){
    //     console.log("Parent component Did Mount Called")
        

    // }

    render()
    {
        // console.log("parent Render Called")

        return(
            <div>
                <h1>About Us!!</h1>
                {/* <UserClass name={"First"} location={"Gwalior (class)"}/> */}
                {/* <User/> */}
                <div>
                    Logged In User :
                  <UserContext.Consumer>
                    {({loggedInUser})=> <h1 className="p-2 font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>  
                </div>
            </div>
        )
    }
}
export default About;
import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Child constructer Called")
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Dummy Place",
                
            }
        }
    }

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    // console.log(json)
    console.log("child component Did Mount Called")
    this.setState({
        userInfo:json
    })
}
componentDidUpdate(){
    console.log("component Did Update Called")
}
    
        render(){
            console.log(this.props.name+" Child Render Called")
            const {name,location,avatar_url} =this.state.userInfo;
 
        return (
            <div className="user-card">
                {/* <h1>Count:{this.state.count}</h1> */}
                <img src={avatar_url} style={{height:250}}/>
                <h1>Name : {name} </h1>
                 <h2>Location : {location}</h2>
                <h2>Contact : 9584899882</h2>
        </div>
        )
    }
}

export default UserClass;
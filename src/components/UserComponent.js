import React from "react"
class UserComponent extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={
           userInfo:{

           },
        };

    }
    async componentDidMount()
    {
       const data=await fetch("https://api.github.com/users/ArunPusalapati")
       const json= await data.json()
       console.log(json);
       this.setState({
        userInfo:json,
       })
    }
    render(){
        
        const {name,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
               <h1>Name:{name}</h1>
               <h2>Location:Hyderabad</h2>
               <h2>College:GRIET</h2>  
            </div>
        );
    }
}

export default UserComponent;
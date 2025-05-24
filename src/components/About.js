import User from "./User"
import UserComponent from "./UserComponent";
import React from "react"

class About extends React.Component{
    constructor(props)
    {
        super(props);
        
    }
    componentDidMount()
    {
       
    }
    render(){
        
     return (
        <div>
            <div>
                <h1> Aboout </h1>
            </div>
           <div className="about-container">
           
           {/* <User  /> */}
           <UserComponent />
           <UserComponent />
           <UserComponent />
           <UserComponent />
          </div> 
        </div>
       
    );
    };
}
export default About;
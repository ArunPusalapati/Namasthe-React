import {useState} from "react"
const User=({name,college})=>{
    const [count,SetCount]=useState(0);
    return (
        <div className="user-card">
        <h1>Count:{count}</h1>
        <button onClick={
            ()=>{
                SetCount(count+1);
            }
        }>Increase Count</button>
        <button  onClick={
            ()=>{
                SetCount(0);
            }
        }>
            Resest btn
        </button>
        <h2>Location:Hyderabad</h2>
        <h2>College:{college}</h2>
        </div>

    );
}

export default User;
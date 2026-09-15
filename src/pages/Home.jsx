import "./Home.css";
import {MenuData} from "../data/api.js";
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom';

function Home(){
    const[food,setFood] = useState([]);

    useEffect(()=>{
      MenuData().then((data)=>{
        setFood(data);
      })
    },[])

    return(
        <>
        <div className="h-main">
           
<div className="upper-box">

{food.map((arc)=>{
    return(
    <div className="food-box" key={arc.id}>
      <img src={arc.image}/>
<h3>{arc.name}</h3>
<p>PRICE ₹{arc.userId}</p>
<Link to="/order">
<button id="order">ORDER</button>
</Link>
    </div>
    )
})}

</div>

        </div>
        </>
    )
}
export default Home;